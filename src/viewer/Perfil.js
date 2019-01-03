import React from 'react';
import {View, Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


class Perfil extends React.Component{
    
    static navigationOptions = {
        tabBarLabel: 'Perfil',
        tabBarIcon: ({ tintColor }) => (
            <MaterialCommunityIcons name={'account-location'} size={25} color={tintColor} />
        ),
      };
    
    render(){

        return(
            <View>
                <Text>
                    Perfil
                </Text>   
            </View>    
        );
    }

    

}

export default Perfil;