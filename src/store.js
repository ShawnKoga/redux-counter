import { createStore } from 'redux';
import reducer from './ducks/counter';
import promiseMiddleware from 'redux-promise-middleware';

let store = createStore( reducer );

// let createStoreWithMiddleware = applyMiddleware(
//   promiseMiddleware()
// )(createStore);

// let store = createStoreWithMiddleware(reducer);

export default store;