import {
    ADD_ITEM_TO_CART,
    EMPTY_CART,
    REMOVE_ITEM_FROM_CART,
    SET_ITEM_QUANTITY,
    TOGGLE_CART_ACTION
} from "../actionTypes";

export const cartReducer = (state = {visible: false, orderItems: {}}, action) => {
    switch (action.type) {
        case TOGGLE_CART_ACTION:
            return {...state, visible: !state.visible};
        case EMPTY_CART:
            return {...state, orderItems: {}};
        case ADD_ITEM_TO_CART:
            state.orderItems[action.product.id] = {
                product: action.product,
                quantity: 1,
                totalCost: Number(action.product.price)
            };
            return {...state};
        case REMOVE_ITEM_FROM_CART:
            delete state.orderItems[action.prodId];
            return {...state};
        case SET_ITEM_QUANTITY:
            if (action.quantity > 0 && action.quantity < 100) {
                state.orderItems[action.prodId] = {
                    ...state.orderItems[action.prodId],
                    quantity: action.quantity,
                    totalCost: action.quantity * state.orderItems[action.prodId].product.price
                };
            }
            return {...state};
        default:
            return state;
    }
};