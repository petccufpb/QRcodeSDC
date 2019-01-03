// tudo o que for ser renderizado, componente, precisa importar:
import React from 'react';
//os pontos representam as pastas
import {Inicial, Perfil, Config} from '../viewer';
// createStackNavigator : por onde criaremos nossa rota, que é por onde navegaremos no app
import {createStackNavigator} from 'react-navigation';
// criando a barra de navegação e criando cada um dos ícones(objetos) e passando como parâmetro o que vai ser o inicial
const Rotas = createStackNavigator({
  Inicial: { screen: Inicial }, Perfil: { screen: Perfil }, Configurações: { screen: Config }
},{initialRouteName: 'Inicial'})
// aqui exportamos a barra inteira para outras classes importarem
export default Rotas;
