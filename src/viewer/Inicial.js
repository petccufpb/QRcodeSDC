import React from 'react';
import {View,Text,FlatList,StyleSheet,TouchableOpacity, Alert} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {connect} from 'react-redux'; 
import {mudaDataTexto} from '../store/ducks/contagem';

const styles = StyleSheet.create({
    container: {
        //flex serve para definir o tamanho da forma e 1 é a tela inteira 
        flex: 1, 
        backgroundColor: "#fff",
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: 16
    }, 
    containerDias: {
        height: 96,
        backgroundColor: "#0277BD",
        flexDirection: 'row',
        padding: 5,
        margin: 6
    },
    containerCirculo: {
        flex:0.3,
        flexDirection: 'column',
        justifyContent: 'center'
        
    },
    containerTexto: {
        flex:0.7,
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
    estiloTexto: {
        fontSize:40,
        color:"#fff"
    },
    estiloCirculo: {
        height: 80,
        width: 80,
        backgroundColor: "#fff",
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    estiloTextoCirculo: {
        fontSize:25,
        color:"#0277BD"
    }
});

class Inicial extends React.Component{

//inicialização do construtor pai
    constructor (props){      
        super(props);
//usando o this, ja cria o atributo  
//array de objetos contendo a info      
        this.dias = [{data: "11/02", texto: "Primeiro dia", id: "1"},
                    {data: "12/02", texto: "Segundo dia", id: "2"},
                    {data: "13/02", texto: "Terceiro dia", id: "3"},
                    {data: "14/02", texto: "Quarto dia", id: "4S"},
                    {data: "15/02", texto: "Quinto dia", id: "5"}];
    } 

    static navigationOptions = {
        tabBarLabel: 'Inicial',
        tabBarIcon: ({ tintColor }) => (
            <MaterialCommunityIcons name={'checkbox-marked-outline'} size={25} color={tintColor} />
        ),
      };
    
//mostra notificacao
notificacao (nome,data){
    Alert.alert("QRCodeSDC",`Nome: ${nome} Data: ${data}`);
}

chamaContagem(nome,data){
    this.props.mudaDataTexto(data,nome); 
    this.props.navigation.navigate('Contagem'); 
}
    render(){

        return(
            <View style={styles.container}>
                <FlatList 
                    //identificador de cada elemento
                    keyExtractor={item => item.id}
                    data={this.dias}
                    renderItem={({item}) => (
  
                        <TouchableOpacity style={styles.containerDias} onPress={() => this.chamaContagem(item.data,item.texto)}>
                            <View style={styles.containerCirculo}>
                                <View style={styles.estiloCirculo}>
                                    <Text style={styles.estiloTextoCirculo}>
                                        {item.data}
                                    </Text>    
                                </View>    
                            </View>

                            <View style={styles.containerTexto}>
                                <Text style={styles.estiloTexto}>
                                    {item.texto}
                                </Text>    
                            </View>    
                        </TouchableOpacity>
                    )}
                />             
            </View>    
        );
    }

}

//os parametros são: o estado e as funções
export default connect(null,{mudaDataTexto})(Inicial);

{/*() => arrow function, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
seta significa retorno, poderia ser substituido por () { return this.notificacao() }   */}          