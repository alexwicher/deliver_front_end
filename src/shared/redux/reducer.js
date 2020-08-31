import {combineReducers} from 'redux';
import {cartReducer} from './reducers/cartReducer';
import {productListReducer} from "./reducers/productListReducer";
import {categoryListReducer} from "./reducers/categoryListReducer";
import {userloginReducer, userRegisterReducer} from "./reducers/userReducer";

export default combineReducers({
    cartReducer,
    productListReducer,
    categoryListReducer,
    userRegisterReducer,
    userloginReducer,
});