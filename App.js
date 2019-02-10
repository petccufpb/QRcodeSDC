import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import Rotas from './src/navigation';
import {Provider} from 'react-redux';
import Store from './src/store';

export default class App extends Component{
  render() {
    return (
      <Provider store={Store}>
        <StatusBar
                backgroundColor={'#01579B'}
            />
      <Rotas/>
      </Provider>
    );
  }
}
