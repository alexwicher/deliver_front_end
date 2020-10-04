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

const initialAddDirection = {loading: {add: false, delete: false, get: false}, error: '', status: null, directions: {}};

export const directionReducer = (state = initialAddDirection, action) => {
    switch (action.type) {
        case ADD_DIRECTION_REQUEST:
            return {...state};
        case ADD_DIRECTION_SUCESS:
            state.directions[action.direction.id] = action.direction.address;
            state.loading.add = false;
            return {...state};
        case ADD_DIRECTION_FAIL:
            return {
                ...state, error: action.error
            };
        case GET_DIRECTIONS_REQUEST:
            state.loading.get = true;
            return {...state};
        case GET_DIRECTIONS_SUCESS:
            state.loading.get = false;
            return {...state, status: action.status, directions: action.directions};
        case GET_DIRECTIONS_FAIL:
            state.loading.get = false;
            return {
                ...state, error: action.error
            };
        case DELETE_DIRECTION_REQUEST:
            state.loading.delete = true;
            return {...state};
        case DELETE_DIRECTION_SUCESS:
            delete state.directions[action.dirId];
            state.loading.delete = false;
            return {...state};
        case DELETE_DIRECTION_FAIL:
            state.loading.delete = false;
            return {
                ...state, error: action.error
            };
        default:
            return state;
    }
};