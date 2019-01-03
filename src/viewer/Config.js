import React from 'react';
import {View, Text} from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

class Config extends React.Component{


    static navigationOptions = {
        tabBarLabel: 'Configurações',
        tabBarIcon: ({ tintColor }) => (
            <MaterialCommunityIcons name={'settings-outline'} size={25} color={tintColor} />
        ),
      };

//é o unico metodo q é necessario escrever, q será o conteudo mostrado na tela
    render(){
//o retorno do render só pode ser um unico filho        
        return (
            <View>
            <Text>
                Config 
            </Text>    

            </View>      
        );
    }     

}

//serve para os outros arquivos enxergarem esse arquivo
//exportou em default pq só tá compartilhando uma coisa nesse caso, uma classe
export default Config;



