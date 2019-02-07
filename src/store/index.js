//rootReducer é o conjunto de reducers criado no index de ducks
import rootReducer from './ducks';
import {createStore,applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';

//o Middleware permite criar actions assíncronas 
const Store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default Store;
