import reducers from './reducers';
import idLogged from "./idLogged";
import {combineReducers} from 'redux';

const allReducers = combineReducers({ counterReducer: reducers, idLogged });
export default allReducers;