import 'dotenv/config';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import initialState from './initialState';
import reducers from '../reducers';
import apiMiddleware from '../../middlewares/apiMiddleware';

const middlewares = [thunk, apiMiddleware];

export default createStore(
  combineReducers(reducers),
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares)),
);
