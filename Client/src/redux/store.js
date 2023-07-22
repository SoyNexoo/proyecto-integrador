import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer'; // Importa tu reducer aquí

const store = createStore(reducer, applyMiddleware(thunk));

export default store;