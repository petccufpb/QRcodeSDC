//rootReducer é o conjunto de reducers criado no index de ducks
import rootReducer from './ducks';
import {createStore,applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';

const Store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default Store;
