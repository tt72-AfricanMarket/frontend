import { combineReducers } from 'redux';
import { marketReducer } from './marketReducer';
import { userReducer } from './userReducer';
import { fetchReducer } from './fetchReducer';
import { cartReducer } from './cartReducer';

export default combineReducers({
    marketReducer,
    cartReducer,
    fetchReducer,
    userReducer
});
