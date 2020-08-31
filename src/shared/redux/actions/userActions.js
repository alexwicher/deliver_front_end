import {loginUser, registerUser} from "../../api";
import {
    FAIL_USER_LOGIN,
    FAIL_USER_REGISTER, JWT_USER_LOGOUT,
    REQUEST_USER_LOGIN,
    REQUEST_USER_REGISTER,
    SUCESS_USER_LOGIN,
    SUCESS_USER_REGISTER
} from "../actionTypes";

// ---------------- Register ----------------

export const requestUserRegister = () => {
    return {type: REQUEST_USER_REGISTER};
};
export const sucessUserRegister = (username) => {
    return {
        type: SUCESS_USER_REGISTER,
        user: username
    };
};
export const failUserRegister = (error) => {
    return {
        type: FAIL_USER_REGISTER,
        error: error
    };
};

export const userRegister = (username, password, email, re_password) => {
    return (dispatch) => {
        dispatch(requestUserRegister());
        registerUser(username, password, email, re_password).then(response => {
            const user = response.data.username;
            dispatch(sucessUserRegister(user));
        }).catch(error => {
                dispatch(failUserRegister(error.response.data))
            }
        )
    }
};

// ---------------- Register ----------------

// ---------------- Log-in ----------------

export const requestUserLogin = () => {
    return {type: REQUEST_USER_LOGIN};
};
export const sucessUserLogin = (accessToken, refreshToken) => {
    return {
        type: SUCESS_USER_LOGIN,
        accessToken: accessToken,
        refreshToken: refreshToken,
    };
};
export const failUserLogin = (error) => {
    return {
        type: FAIL_USER_LOGIN,
        error: error
    };
};
export const logOutUser = () => {
    return {
        type: JWT_USER_LOGOUT,
    };
};

export const userLogin = (username, password) => {
    return (dispatch) => {
        dispatch(requestUserLogin());
        loginUser(username, password).then(response => {
            dispatch(sucessUserLogin(response.data.access, response.data.refresh));
        }).catch(error => {
                dispatch(failUserLogin(error.response.data))
            }
        )
    }
};

export const userLogOut = () => {
    return (dispatch) => {
        dispatch(logOutUser());
    }
};

// ---------------- Log-in ----------------