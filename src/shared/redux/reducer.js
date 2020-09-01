import {combineReducers} from 'redux';
import {cartReducer} from './reducers/cartReducer';
import {productListReducer} from "./reducers/productListReducer";
import {categoryListReducer} from "./reducers/categoryListReducer";
import {
    passwordConfirmResetReducer,
    passwordResetReducer,
    userloginReducer,
    userRegisterReducer
} from "./reducers/userReducer";

export default combineReducers({
    cartReducer,
    productListReducer,
    categoryListReducer,
    userRegisterReducer,
    userloginReducer,
    passwordResetReducer,
    passwordConfirmResetReducer,
});