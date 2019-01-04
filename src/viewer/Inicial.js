import React from 'react';
import {View,Text,FlatList,StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
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
        flex: 0.2,
        backgroundColor: "#0277BD",
        flexDirection: 'row',
        padding: 5
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
    
    static navigationOptions = {
        tabBarLabel: 'Inicial',
        tabBarIcon: ({ tintColor }) => (
            <MaterialCommunityIcons name={'checkbox-marked-outline'} size={25} color={tintColor} />
        ),
      };
    
    render(){

        return(
            <View style={styles.container}>
                <View style={styles.containerDias}>
                    <View style={styles.containerCirculo}>
                        <View style={styles.estiloCirculo}>
                            <Text style={styles.estiloTextoCirculo}>
                                11/02
                            </Text>    
                        </View>    
                    </View>

                    <View style={styles.containerTexto}>
                        <Text style={styles.estiloTexto}>
                            Primeiro dia
                        </Text>    
                    </View>    
                </View>
            </View>    
        );
    }

}

export default Inicial;