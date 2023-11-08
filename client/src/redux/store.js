import { createStore, applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import reducerFav from './reducer';


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // esta línea es para conectar con la extensión del navegador => REDUX DEVTOOLS 

const store = createStore(
    reducerFav,
    composeEnhancer(applyMiddleware(thunk)) // esta línea es para poder hacer peticiones a un server
);

export default store;