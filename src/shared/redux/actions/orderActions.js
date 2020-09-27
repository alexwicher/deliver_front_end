import {CREATE_ORDER_FAIL, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCESS} from "../actionTypes";
import {createOrderRequest} from "../../api";

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
