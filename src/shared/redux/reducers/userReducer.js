import {
    FAIL_USER_LOGIN,
    FAIL_USER_REGISTER,
    JWT_USER_LOGOUT,
    PASSWORD_CONFIRM_RESET_FAIL,
    PASSWORD_CONFIRM_RESET_REQUEST,
    PASSWORD_CONFIRM_RESET_SUCESS,
    PASSWORD_RESET_FAIL,
    PASSWORD_RESET_REQUEST,
    PASSWORD_RESET_SUCESS,
    REQUEST_USER_LOGIN,
    REQUEST_USER_REGISTER,
    SUCESS_USER_LOGIN,
    SUCESS_USER_REGISTER
} from "../actionTypes";

const initialStateRegister = {loading: false, user: [], error: ''};

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

const initialStateLogin = {loading: false, accessToken: '', refreshToken: '', error: '', username: ''};

export const userloginReducer = (state = initialStateLogin, action) => {
    switch (action.type) {
        case REQUEST_USER_LOGIN:
            return {...state, loading: true};
        case SUCESS_USER_LOGIN:
            return {
                ...state,
                loading: false,
                accessToken: action.accessToken,
                refreshToken: action.refreshToken,
                username: action.username
            };
        case FAIL_USER_LOGIN:
            return {
                ...state, loading: false, error: action.error
            };
        case JWT_USER_LOGOUT:
            return {
                ...state, accessToken: '', refreshToken: '', username: ''
            };
        default:
            return state;
    }
};

const initialStatePasswordReset = {loading: false, error: '', status: null};

export const passwordResetReducer = (state = initialStatePasswordReset, action) => {
    switch (action.type) {
        case PASSWORD_RESET_REQUEST:
            return {...state, loading: true};
        case PASSWORD_RESET_SUCESS:
            return {...state, loading: false, status: action.status};
        case PASSWORD_RESET_FAIL:
            return {
                ...state, loading: false, error: action.error
            };
        default:
            return state;
    }
};

const initialStatePasswordConfirmReset = {loading: false, error: '', status: null};

export const passwordConfirmResetReducer = (state = initialStatePasswordConfirmReset, action) => {
    switch (action.type) {
        case PASSWORD_CONFIRM_RESET_REQUEST:
            return {...state, loading: true};
        case PASSWORD_CONFIRM_RESET_SUCESS:
            return {...state, loading: false, status: action.status};
        case PASSWORD_CONFIRM_RESET_FAIL:
            return {
                ...state, loading: false, error: action.error
            };
        default:
            return state;
    }
};