import {
    ADD_DIRECTION_FAIL,
    ADD_DIRECTION_REQUEST,
    ADD_DIRECTION_SUCESS,
    DELETE_DIRECTION_FAIL,
    DELETE_DIRECTION_REQUEST,
    DELETE_DIRECTION_SUCESS,
    GET_DIRECTIONS_FAIL,
    GET_DIRECTIONS_REQUEST,
    GET_DIRECTIONS_SUCESS
} from "../actionTypes";
import {addDirectionRequest, deleteDirectionRequest, getDirectionsRequest} from "../../api";

export const requestAddDirection = () => {
    return {type: ADD_DIRECTION_REQUEST}
};

export const failAddDirection = (error) => {
    return {
        type: ADD_DIRECTION_FAIL,
        error: error
    };
};

export const sucessAddDirection = (direction, status) => {
    return {
        type: ADD_DIRECTION_SUCESS,
        status: status,
        direction: direction
    }
};

export const addDirection = (direction, accessToken) => {
    return (dispatch) => {
        dispatch(requestAddDirection());
        addDirectionRequest(direction, accessToken).then(response => {
            dispatch(sucessAddDirection({id: response.data.dirId, address: direction}, response.status));
        }).catch(error => {
                dispatch(failAddDirection(error.response.data))
            }
        )
    }
};

export const requestDeleteDirection = () => {
    return {type: DELETE_DIRECTION_REQUEST}
};

export const failDeleteDirection = (error) => {
    return {
        type: DELETE_DIRECTION_FAIL,
        error: error
    };
};

export const sucessDeleteDirection = (dirId, status) => {
    return {
        type: DELETE_DIRECTION_SUCESS,
        status: status,
        dirId: dirId
    }
};

export const deleteDirection = (dirId, accessToken) => {
    return (dispatch) => {
        dispatch(requestDeleteDirection());
        deleteDirectionRequest(dirId, accessToken).then(response => {
            dispatch(sucessDeleteDirection(dirId, response.status));
        }).catch(error => {
                dispatch(failDeleteDirection(error.response.data))
            }
        )
    }
};

export const requestGetDirections = () => {
    return {type: GET_DIRECTIONS_REQUEST}
};

export const failGetDirections = (error) => {
    return {
        type: GET_DIRECTIONS_FAIL,
        error: error
    };
};

export const sucessGetDirections = (directions, status) => {
    return {
        type: GET_DIRECTIONS_SUCESS,
        status: status,
        directions: directions
    }
};

export const getDirections = (accessToken) => {
    return (dispatch) => {
        dispatch(requestGetDirections());
        getDirectionsRequest(accessToken).then(response => {
            var addresses = response.data;
            dispatch(sucessGetDirections(addresses, response.status));
        }).catch(error => {
                dispatch(failGetDirections(error.response.data))
            }
        )
    }
};
