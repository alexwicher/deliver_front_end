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

const initialAddDirection = {loading: false, error: '', status: null, directions: {}};

export const directionReducer = (state = initialAddDirection, action) => {
    switch (action.type) {
        case ADD_DIRECTION_REQUEST:
            return {...state, loading: true};
        case ADD_DIRECTION_SUCESS:
            state.directions[action.direction.id] = {
                direction: action.direction
            };
            return {...state};
        case ADD_DIRECTION_FAIL:
            return {
                ...state, loading: false, error: action.error
            };
        case GET_DIRECTIONS_REQUEST:
            return {...state, loading: true};
        case GET_DIRECTIONS_SUCESS:
            return {...state, loading: false, status: action.status, directions: action.directions};
        case GET_DIRECTIONS_FAIL:
            return {
                ...state, loading: false, error: action.error
            };
        case DELETE_DIRECTION_REQUEST:
            return {...state, loading: true};
        case DELETE_DIRECTION_SUCESS:
            delete state.directions[action.dirId];
            return {...state};
        case DELETE_DIRECTION_FAIL:
            return {
                ...state, loading: false, error: action.error
            };
        default:
            return state;
    }
};