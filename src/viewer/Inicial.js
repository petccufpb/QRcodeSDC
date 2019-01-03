import React from 'react';
import {View,Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

class Inicial extends React.Component{
    
    static navigationOptions = {
        tabBarLabel: 'Inicial',
        tabBarIcon: ({ tintColor }) => (
            <MaterialCommunityIcons name={'checkbox-marked-outline'} size={25} color={tintColor} />
        ),
      };
    
    render(){

        return(
            <View>
                <Text>
                    Inicial
                 </Text>   
            </View>    
        );
    }

}

export default Inicial;