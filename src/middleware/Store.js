import {createStore,applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import rootReducer from './reducers';
import {compose} from 'redux';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));

export default Store;