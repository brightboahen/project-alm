import { combineReducers } from 'redux';

import AppReducer from './AppReducer';
import AuthReducer from './AuthReducer';

const RootReducer = combineReducers({ AppReducer, AuthReducer });

export default RootReducer;
