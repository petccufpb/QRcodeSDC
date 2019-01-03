// tudo o que for ser renderizado, componente, precisa importar:
import React from 'react';
//
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//os pontos representam as pastas
import {Inicial, Perfil, Config} from '../viewer';
// createMaterialTopTabNavigator : por onde criaremos nossa rota, que é por onde navegaremos no app

import {createMaterialTopTabNavigator, createAppContainer} from 'react-navigation';
// criando a barra de navegação e criando cada um dos ícones(objetos) e passando como parâmetro o que vai ser o inicial

const Stack = createMaterialTopTabNavigator({
  Inicial: { screen: Inicial }, Perfil: { screen: Perfil }, Config: { screen: Config }
},

{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Inicial') {
        iconName = 'checkbox-marked-outline';
      } else if (routeName === 'Perfil') {
        iconName = 'account-location';
      }else if(routeName === 'Config'){
        iconName = 'settings-outline';
      }

      // You can return any component that you like here! We usually use an
      // icon component from react-native-vector-icons
      return <MaterialCommunityIcons name={iconName} size={25} color={'#fff'} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'white',
    inactiveTintColor: 'gray',
    showIcon: true,
    style: {
      backgroundColor: '#161b1f',
      elevation: 0,
      borderBottomColor: 'gray',
      borderBottomWidth: 1,
    }, 
    indicatorStyle: {
      backgroundColor: 'white'
    },
    labelStyle: {
      fontSize: 10
    }
  },
}
,
{initialRouteName: 'Inicial'})


const Rotas = createAppContainer(Stack);

// aqui exportamos a barra inteira para outras classes importarem
export default Rotas;
