import rootReducer from './ducks';
import {createStore} from 'redux';

const Store = createStore(rootReducer);

export default Store;
