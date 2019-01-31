//rootReducer é o conjunto de reducers criado no index de ducks
import rootReducer from './ducks';
import {createStore} from 'redux';

const Store = createStore(rootReducer);

export default Store;
