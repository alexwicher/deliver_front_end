import {loginUser, registerUser, resetPassword, resetPasswordConfirm} from "../../api";
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
export const sucessUserLogin = (accessToken, refreshToken,username,uid) => {
    return {
        type: SUCESS_USER_LOGIN,
        username:username,
        accessToken: accessToken,
        refreshToken: refreshToken,
        uid: uid
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
            dispatch(sucessUserLogin(response.data.access, response.data.refresh,username,response.data.uid));
        }).catch(error => {
                dispatch(failUserLogin(error.response.data))
            }
        )
    }
};

// ---------------- Log-in ----------------

export const userLogOut = () => {
    return (dispatch) => {
        dispatch(logOutUser());
    }
};

// ---------------- Password reset ----------------

export const requestPasswordReset = () => {
    return {
        type: PASSWORD_RESET_REQUEST,
    }
};

export const failPasswordReset = (error) => {
    return {
        type: PASSWORD_RESET_FAIL,
        error: error
    };
};

export const requestPasswordSucess = (status) => {
    return {
        type: PASSWORD_RESET_SUCESS,
        status: status

    }
};

export const passwordReset = (email) => {
    return (dispatch) => {
        dispatch(requestPasswordReset());
        resetPassword(email).then(response => {
            dispatch(requestPasswordSucess(response.status));
        }).catch(error => {
                dispatch(failPasswordReset(error.status))
            }
        )
    }
};

// ---------------- Password reset ----------------

// ---------------- Password reset confirm ----------------

export const requestPasswordResetConfirm = () => {
    return {type: PASSWORD_CONFIRM_RESET_REQUEST}
};

export const failPasswordResetConfirm = (error) => {
    return {
        type: PASSWORD_CONFIRM_RESET_FAIL,
        error: error
    };
};

export const sucessPasswordConfirm = (status) => {
    return {
        type: PASSWORD_CONFIRM_RESET_SUCESS,
        status: status
    }
};

export const passwordResetConfirm = (uid, token, pass, re_pass) => {
    return (dispatch) => {
        dispatch(requestPasswordResetConfirm());
        resetPasswordConfirm(uid, token, pass, re_pass).then(response => {
            dispatch(sucessPasswordConfirm(response.status));
        }).catch(error => {
                dispatch(failPasswordResetConfirm(error.response.data))
            }
        )
    }
};

// ---------------- Password reset confirm ----------------