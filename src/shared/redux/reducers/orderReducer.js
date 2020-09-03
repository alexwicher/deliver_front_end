import {CREATE_ORDER_FAIL, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCESS} from "../actionTypes";

const initialState = {loading: false, error: '', order: ''};

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_ORDER_REQUEST:
            return {...state, loading: true};
        case CREATE_ORDER_SUCESS:
            return {...state, loading: false, order: action.order};
        case CREATE_ORDER_FAIL:
            return {...state, loading: false, error: action.error};
        default:
            return state;
    }
};