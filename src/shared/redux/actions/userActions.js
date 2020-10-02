import {
    changeEmailRequest,
    changeUsernameRequest,
    loggedResetPasswordConfirm,
    loginUser,
    registerUser,
    resetPassword,
    resetPasswordConfirm
} from "../../api";
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
export const sucessUserLogin = (accessToken, refreshToken, username, uid) => {
    return {
        type: SUCESS_USER_LOGIN,
        username: username,
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
            dispatch(sucessUserLogin(response.data.access, response.data.refresh, username, response.data.uid));
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

// ---------------- Logged password reset ----------------

export const requestLoggedPasswordResetConfirm = () => {
    return {type: LOGGED_PASSWORD_RESET_REQUEST}
};

export const failLoggedPasswordResetConfirm = (error) => {
    return {
        type: LOGGED_PASSWORD_RESET_FAIL,
        error: error
    };
};

export const sucessLoggedPasswordConfirm = (status) => {
    return {
        type: LOGGED_PASSWORD_RESET_SUCESS,
        status: status
    }
};

export const passwordLoggedResetConfirm = (pass, new_pass, re_new_pass,accessToken) => {
    return (dispatch) => {
        dispatch(requestLoggedPasswordResetConfirm());
        loggedResetPasswordConfirm(pass, new_pass, re_new_pass).then(response => {
            dispatch(sucessLoggedPasswordConfirm(response.status));
        }).catch(error => {
                dispatch(failLoggedPasswordResetConfirm(error.response.data))
            }
        )
    }
};

// ---------------- Logged password reset ----------------


// ---------------- Username change ----------------

export const requestChangeUsername = () => {
    return {type: USERNAME_RESET_REQUEST}
};

export const failChangeUsername = (error) => {
    return {
        type: USERNAME_RESET_FAIL,
        error: error
    };
};

export const sucessChangeUsername = (status) => {
    return {
        type: USERNAME_RESET_SUCESS,
        status: status
    }
};

export const changeUsername = (username,accessToken) => {
    return (dispatch) => {
        dispatch(requestChangeUsername());
        changeUsernameRequest(username,accessToken).then(response => {
            dispatch(sucessChangeUsername(response.status));
        }).catch(error => {
                dispatch(failChangeUsername(error.response.data))
            }
        )
    }
};

// ---------------- Username change ----------------


// ---------------- Email change ----------------

export const requestChangeEmail = () => {
    return {type: EMAIL_RESET_REQUEST}
};

export const failChangeEmail = (error) => {
    return {
        type: EMAIL_RESET_FAIL,
        error: error
    };
};

export const sucessChangeEmail = (status) => {
    return {
        type: EMAIL_RESET_SUCESS,
        status: status
    }
};

export const changeEmail = (email,accessToken) => {
    return (dispatch) => {
        dispatch(requestChangeEmail());
        changeEmailRequest(email,accessToken).then(response => {
            dispatch(sucessChangeEmail(response.status));
        }).catch(error => {
                dispatch(failChangeEmail(error.response.data))
            }
        )
    }
};

// ---------------- Email change ----------------

