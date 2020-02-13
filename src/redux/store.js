import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';

let middlewares = [thunkMiddleware];

export const store = createStore(
  combineReducers({...reducers}),
  compose(applyMiddleware(...middlewares)),
);
