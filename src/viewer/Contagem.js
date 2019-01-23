import React from 'react';
import {Text,View, StyleSheet} from 'react-native';
import ActionButton from 'react-native-action-button';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {connect} from 'react-redux';

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
    }
}

);


class Contagem extends React.Component{
//cria-se o constr para criar os atributos & deve-se incluir o super e props
    constructor(props){
        super(props);
//state é um objeto que serve para atualizar o valor das variaveis no render        
        this.state = {
            contador: 0
        };
    }

    incrementador(){
        let contadorAnterior = this.state.contador;
        contadorAnterior++;
        this.setState({contador: contadorAnterior});
    }
    
    render(){
    return(
        <View style={styles.container}>
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
            <ActionButton buttonColor= "rgba(2, 119, 189, 1)" onPress={() => this.incrementador()} renderIcon={() => <MaterialCommunityIcons name="qrcode-scan" color="#fff" size={30}/> }  >

            </ActionButton>
            
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
export default connect(mapStateToProps,{})(Contagem);



