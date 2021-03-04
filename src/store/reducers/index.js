import { combineReducers } from 'redux';
import { marketReducer } from './marketReducer';
import { userReducer } from './userReducer';
import { fetchReducer } from './fetchReducer';


export default combineReducers({
    marketReducer,
    fetchReducer,
    userReducer
});
