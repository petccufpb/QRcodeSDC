import contagemReducer from './contagem';
import {combineReducers} from 'redux';

export default combineReducers({
    contagemReducer
});

/*
Outra forma de exportar 
const Reducers= combineReducers({
    contagemReducer
});
export default Reducers;
*/

