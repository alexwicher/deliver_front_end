import {FAIL_PRODUCT_LIST_ACTION, FILL_PRODUCT_LIST_ACTION, REQUEST_PRODUCT_LIST_ACTION} from "../actionTypes";

const initialState = {loading: false, products: [], error: ''};

export const productListReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_PRODUCT_LIST_ACTION:
            return {...state, loading: true};
        case FILL_PRODUCT_LIST_ACTION:
            return {...state, loading: false, products: action.products};
        case FAIL_PRODUCT_LIST_ACTION:
            return {...state, loading: false, error: action.error};
        default:
            return state;
    }
};