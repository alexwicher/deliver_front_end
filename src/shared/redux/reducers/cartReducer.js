import {TOGGLE_CART_ACTION} from "../actionTypes";

export const cartReducer = (state = {visible: false}, action) => {
    switch (action.type) {
        case TOGGLE_CART_ACTION:
            return {...state, visible: !state.visible};
        default:
            return state;
    }
};