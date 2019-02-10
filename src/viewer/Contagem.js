import React from 'react';
import {Text,View, StyleSheet, Modal, Alert, StatusBar} from 'react-native';
import ActionButton from 'react-native-action-button';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {connect} from 'react-redux';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {escreveDataBase} from '../store/ducks/contagem';
import {converteDia} from '../util';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'   
    },
    textoNumero:{
        fontSize: 100,
        color: "#01579B"
    },
    textoCheck: {
        fontSize: 30,
        color: "#0277BD"
    },
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777',
      },
      textBold: {
        fontWeight: '500',
        color: '#000',
      },
      buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)',
      },
      buttonTouchable: {
        padding: 16,
      }
}

);


class Contagem extends React.Component{
//cria-se o constr para criar os atributos & deve-se incluir o super e props
    constructor(props){
        super(props);
//state é um objeto que serve para atualizar o valor das variaveis no render        
        this.state = {
            contador: 0,
            modalVisible: false
        };
    }

    incrementador(){
        let contadorAnterior = this.state.contador;
        contadorAnterior++;
        this.setState({contador: contadorAnterior});
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    //responsavel pela leitura do ingresso    
    onSuccess(e) {
        try {
            // recebendo valor pela props navigation (lib react-navigation)
            // a tela Inicial.js passa como parametro a variavel `diaNumero`
            const diaEscolhido = this.props.navigation.getParam('diaNumero');
            //ID@dia1
            const data = e.data;
            const separaStringQR = data.split("@");
            const usuarioID = separaStringQR[0];
            const ingressoDia = separaStringQR[1];
            // verifica se o qrcode eh valido (para um codigo ser valido eh necessario as duas informacoes usuarioId e ingressoDia)
            if (usuarioID && ingressoDia) {
                // teste se o dia selecionado eh o mesmo do ingresso
                if (converteDia(ingressoDia) === diaEscolhido) {
                    this.props.escreveDataBase(usuarioID,ingressoDia);
                    // mensagem identificando caso o processo tenha funcionado
                    Alert.alert('QRCodeSDC', 'Check-in realizado com sucesso.');
                } else {
                    // 
                    Alert.alert('QRCodeSDC', 'Ops!! O dia do ingresso não corresponde com a data selecionada');
                }
            } else {
                // mensagem caso o codigo seja inválido
                Alert.alert('QRCodeSDC', 'Código não representa um ingresso válido.');
            }
            //--
            this.setModalVisible(false);
        } catch (e) {
            // mensagem caso haja algum erro no momento de escrever no banco (ex. falha na internet)
            Alert.alert('QRCodeSDC', String(e));
        }
    }
    
    render(){
    return(
        <View style={styles.container}>
            <StatusBar
                backgroundColor={'#e0e0e0'}
            />
            <Text style={styles.textoNumero}>
                {this.props.contador}
            </Text>

            <Text style={styles.textoCheck}>
                Check-ins realizados
            </Text>    

            <Text>
                {this.props.data}
            </Text>

            <Text>
                {this.props.texto}
            </Text>        
            <ActionButton buttonColor= "rgba(2, 119, 189, 1)" onPress={() => this.setModalVisible(true)} renderIcon={() => <MaterialCommunityIcons name="qrcode-scan" color="#fff" size={30}/> }  >

            </ActionButton>

            <Modal animationType="slide" transparent={false} visible={this.state.modalVisible} onRequestClose={() =>  this.setModalVisible(false)} >
                <QRCodeScanner 
                    showMarker={true}
                    fadeIn={false}
                    onRead={this.onSuccess.bind(this)}
                    // topContent={
                    //     // <Text style={styles.centerText}>
                    //     // Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR code.
                    //     // </Text>
                    // }
                    // bottomContent={
                    //     // <TouchableOpacity style={styles.buttonTouchable}>
                    //     // <Text style={styles.buttonText}>OK. Got it!</Text>
                    //     // </TouchableOpacity>
                    // }
                />
            </Modal>        
        </View>
            
    );

}

} 

//função que vai mapear os estados da props
const mapStateToProps= state => ({
    data: state.contagemReducer.data,
    texto: state.contagemReducer.texto,
    contador: state.contagemReducer.contador
})
//conectando a tela com o store criado
//os parâmetros de connect são: a função que mapeia as props e as actions
export default connect(mapStateToProps,{escreveDataBase})(Contagem);


