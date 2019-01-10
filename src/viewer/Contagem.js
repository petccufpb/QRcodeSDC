import React from 'react';
import {Text,View, StyleSheet} from 'react-native';
import ActionButton from 'react-native-action-button';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
                {this.state.contador}
            </Text>

            <Text style={styles.textoCheck}>
                Check-ins realizados
            </Text>    

            <ActionButton buttonColor= "rgba(2, 119, 189, 1)" onPress={() => this.incrementador()} renderIcon={() => <MaterialCommunityIcons name="qrcode-scan" color="#fff" size={30}/> }  >

            </ActionButton>
            
        </View>    
    );
}

} 

export default Contagem;



