import {combineReducers} from 'redux';
import {cartReducer} from './reducers/cartReducer';
import {productListReducer} from "./reducers/productListReducer";
import {categoryListReducer} from "./reducers/categoryListReducer";
import {
    changeEmailReducer, changeUsernameReducer, loggedPasswordResetReducer,
    passwordConfirmResetReducer,
    passwordResetReducer,
    userloginReducer,
    userRegisterReducer
} from "./reducers/userReducer";
import {popUpReducer} from "./reducers/popUpReducer";
import {orderReducer} from "./reducers/orderReducer";
import {directionReducer} from "./reducers/directionReducer";

export default combineReducers({
    cartReducer,
    productListReducer,
    categoryListReducer,
    userRegisterReducer,
    userloginReducer,
    directionReducer,
    passwordResetReducer,
    passwordConfirmResetReducer,
    popUpReducer,
    orderReducer,
    changeEmailReducer,
    changeUsernameReducer,
    loggedPasswordResetReducer,
});