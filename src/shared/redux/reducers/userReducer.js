import {
    EMAIL_RESET_FAIL, EMAIL_RESET_REQUEST,
    EMAIL_RESET_SUCESS,
    FAIL_USER_LOGIN,
    FAIL_USER_REGISTER,
    JWT_USER_LOGOUT, LOGGED_PASSWORD_RESET_FAIL, LOGGED_PASSWORD_RESET_REQUEST, LOGGED_PASSWORD_RESET_SUCESS,
    PASSWORD_CONFIRM_RESET_FAIL,
    PASSWORD_CONFIRM_RESET_REQUEST,
    PASSWORD_CONFIRM_RESET_SUCESS,
    PASSWORD_RESET_FAIL,
    PASSWORD_RESET_REQUEST,
    PASSWORD_RESET_SUCESS,
    REQUEST_USER_LOGIN,
    REQUEST_USER_REGISTER,
    SUCESS_USER_LOGIN,
    SUCESS_USER_REGISTER, USERNAME_RESET_FAIL, USERNAME_RESET_REQUEST, USERNAME_RESET_SUCESS
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

const initialStateLogin = {loading: false, accessToken: '', refreshToken: '', error: '', username: '',uid:0};

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
                username: action.username,
                uid: action.uid
            };
        case FAIL_USER_LOGIN:
            return {
                ...state, loading: false, error: action.error
            };
        case JWT_USER_LOGOUT:
            return {
                ...state, accessToken: '', refreshToken: '', username: '', uid: 0
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

const initialStateLoggedPasswordReset = {loading: false, error: '', status: null};

export const loggedPasswordResetReducer = (state = initialStateLoggedPasswordReset, action) => {
    switch (action.type) {
        case LOGGED_PASSWORD_RESET_REQUEST:
            return {...state, loading: true};
        case LOGGED_PASSWORD_RESET_SUCESS:
            return {...state, loading: false, status: action.status};
        case LOGGED_PASSWORD_RESET_FAIL:
            return {
                ...state, loading: false, error: action.error
            };
        default:
            return state;
    }
};

const initialStateChangeUsername = {loading: false, error: '', status: null};

export const changeUsernameReducer = (state = initialStateChangeUsername, action) => {
    switch (action.type) {
        case USERNAME_RESET_REQUEST:
            return {...state, loading: true};
        case USERNAME_RESET_SUCESS:
            return {...state, loading: false, status: action.status};
        case USERNAME_RESET_FAIL:
            return {
                ...state, loading: false, error: action.error
            };
        default:
            return state;
    }
};

const initialStateChangeEmail = {loading: false, error: '', status: null};

export const changeEmailReducer = (state = initialStateChangeEmail, action) => {
    switch (action.type) {
        case EMAIL_RESET_REQUEST:
            return {...state, loading: true};
        case EMAIL_RESET_SUCESS:
            return {...state, loading: false, status: action.status};
        case EMAIL_RESET_FAIL:
            return {
                ...state, loading: false, error: action.error
            };
        default:
            return state;
    }
};
