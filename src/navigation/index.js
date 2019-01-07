// tudo o que for ser renderizado, componente, precisa importar:
import React from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//os pontos representam as pastas
import {Inicial, Perfil, Config, Contagem} from '../viewer';
// createMaterialTopTabNavigator : por onde criaremos nossa rota, que é por onde navegaremos no app

import {createMaterialTopTabNavigator, createAppContainer, createStackNavigator} from 'react-navigation';


// criando a barra de navegação e criando cada um dos ícones(objetos) e passando como parâmetro o que vai ser o inicial
const StackTab = createMaterialTopTabNavigator({
  Inicial: { screen: Inicial }, Perfil: { screen: Perfil }, Config: { screen: Config }
},

{
  tabBarOptions: {
    activeTintColor: 'white',
    inactiveTintColor: '#fafafa',
    showIcon: true,
    style: {
      backgroundColor: '#01579B',
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

//criando uma pilha com as telas que podem ser abertas a partir da tela inicial
const StackAplicacao = createStackNavigator({
  Main:{screen: StackTab,navigationOptions: { header: null }}, Contagem: {screen: Contagem}
},
{initialRouteName: 'Main'}
);

const Rotas = createAppContainer(StackAplicacao);

// aqui exportamos a barra inteira para outras classes importarem
export default Rotas;
