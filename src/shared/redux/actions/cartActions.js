import {ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART, SET_ITEM_QUANTITY, TOGGLE_CART_ACTION} from "../actionTypes";

export const toggleCart = () => {
    return {type: TOGGLE_CART_ACTION};
};
export const addItemToCart = (product) => {
    return {
        type: ADD_ITEM_TO_CART,
        product: product
    };
};
export const removeItemFromCart = (prodId) => {
    return {
        type: REMOVE_ITEM_FROM_CART,
        prodId: prodId
    };
};
export const setItemQuantity = (prodId, quantity) => {
    return {
        type: SET_ITEM_QUANTITY,
        prodId: prodId,
        quantity: quantity
    };
};