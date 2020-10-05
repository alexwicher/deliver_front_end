import {
    CREATE_ORDER_FAIL,
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCESS,
    GET_ORDERS_FAIL,
    GET_ORDERS_REQUEST,
    GET_ORDERS_SUCESS
} from "../actionTypes";

const initialState = {loading: {get: false, create: false}, error: '', order: 0,userOrders:[]};

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_ORDER_REQUEST:
            state.loading.create = true;
            return {...state};
        case CREATE_ORDER_SUCESS:
            state.loading.create = false;
            return {...state, order: action.order};
        case CREATE_ORDER_FAIL:
            state.loading.create = false;
            return {...state, error: action.error};
        case GET_ORDERS_FAIL:
            state.loading.get = false;
            return {...state, error: action.error};
        case GET_ORDERS_SUCESS:
            state.loading.get = false;
            state.userOrders = action.userOrders;
            return {...state};
        case GET_ORDERS_REQUEST:
            state.loading.get = true;
            return {...state};
        default:
            return state;
    }
};