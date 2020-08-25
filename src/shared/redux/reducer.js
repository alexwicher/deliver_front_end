import {combineReducers} from 'redux';
import {cartReducer} from './reducers/cartReducer';
import {productListReducer} from "./reducers/productListReducer";
import {categoryListReducer} from "./reducers/categoryListReducer";

export default combineReducers({
    cartReducer,
    productListReducer,
    categoryListReducer,
});