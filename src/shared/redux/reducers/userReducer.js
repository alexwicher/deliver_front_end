import {
    FAIL_USER_LOGIN,
    FAIL_USER_REGISTER,
    JWT_USER_LOGOUT,
    REQUEST_USER_LOGIN,
    REQUEST_USER_REGISTER,
    SUCESS_USER_LOGIN,
    SUCESS_USER_REGISTER
} from "../actionTypes";

const initialStateRegister = {loading: false, user: [], error: ''};
const initialStateLogin = {loading: false, accessToken: '', refreshToken: '', error: ''};

export const userRegisterReducer = (state = initialStateRegister, action) => {
    switch (action.type) {
        case REQUEST_USER_REGISTER:
            return {...state, loading: true};
        case SUCESS_USER_REGISTER:
            return {...state, loading: false, user: action.user};
        case FAIL_USER_REGISTER:
            return {
                ...state, loading: false, error: action.error
            };
        default:
            return state;
    }
};

export const userloginReducer = (state = initialStateLogin, action) => {
    switch (action.type) {
        case REQUEST_USER_LOGIN:
            return {...state, loading: true};
        case SUCESS_USER_LOGIN:
            return {...state, loading: false, accessToken: action.accessToken, refreshToken: action.refreshToken};
        case FAIL_USER_LOGIN:
            return {
                ...state, loading: false, error: action.error
            };
        case JWT_USER_LOGOUT:
            return {
                ...state, accessToken: '', refreshToken: ''
            };
        default:
            return state;
    }
};