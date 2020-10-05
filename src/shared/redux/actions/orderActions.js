import {
    CREATE_ORDER_FAIL,
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCESS,
    GET_ORDERS_FAIL, GET_ORDERS_REQUEST,
    GET_ORDERS_SUCESS
} from "../actionTypes";
import {createOrderRequest, getOrdersRequest} from "../../api";

export const requestCreateOrder = () => {
    return {type: CREATE_ORDER_REQUEST};
};
export const successCreateOrder = (order) => {
    return {
        type: CREATE_ORDER_SUCESS,
        order: order
    };
};
export const failCreateOrder = (error) => {
    return {
        type: CREATE_ORDER_FAIL,
        error: error
    };
};

export const createOrder = (uid, orderItemList,accessToken) => {
    return (dispatch) => {
        dispatch(requestCreateOrder());
        createOrderRequest(uid, orderItemList,accessToken).then(response => {
            const order = response.data;
            dispatch(successCreateOrder(order));
        }).catch(error => {
                dispatch(failCreateOrder(error.message))
            }
        )
    }
};

export const requestGetOrder = () => {
    return {type: GET_ORDERS_REQUEST};
};
export const successGetOrder = (orders) => {
    return {
        type: GET_ORDERS_SUCESS,
        userOrders: orders
    };
};
export const failGetOrder = (error) => {
    return {
        type: GET_ORDERS_FAIL,
        error: error
    };
};

export const getOrders = (accessToken) => {
    return (dispatch) => {
        dispatch(requestGetOrder());
        getOrdersRequest(accessToken).then(response => {
            const order = response.data;
            dispatch(successGetOrder(order));
        }).catch(error => {
                dispatch(failGetOrder(error.message))
            }
        )
    }
};
