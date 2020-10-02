import axios from 'axios';

export var apiUrl = 'http://127.0.0.1:8000';

// for request that require login user { 'Authorization': 'Bearer <my token>' } to data


export function getAllProducts(categoryID = 0) {
    const data = {
        category_id: categoryID
    };
    return axios.post(apiUrl + '/products/', data);
}

export function getAllCategories() {
    return axios.get(apiUrl + '/categories/');
}

export function registerUser(username, password, email, re_password) {
    const data = {
        username: username,
        password: password,
        re_password: re_password,
        email: email
    };
    return axios.post(apiUrl + '/auth/users/', data);
}

export function loginUser(username, password) {
    const data = {
        username: username,
        password: password,
    };
    return axios.post(apiUrl + '/auth/jwt/create/', data);
}

export function resetPassword(email) {
    const data = {
        email: email,
    };
    return axios.post(apiUrl + '/auth/users/reset_password/', data);
}

export function resetPasswordConfirm(uid, token, newPass, re_newPass) {
    const data = {
        uid: uid,
        token: token,
        new_password: newPass,
        re_new_password: re_newPass
    };
    return axios.post(apiUrl + '/auth/users/reset_password_confirm/', data);
}

export function createOrderRequest(orderItems, accessToken) {
    const authHeader = {
        Authorization: "Bearer " + accessToken
    };
    const data = {
        orderItems: orderItems,
    };
    return axios.post(apiUrl + '/order/create/', data, {headers: authHeader});
}

export function loggedResetPasswordConfirm(pass, new_pass, re_new_pass, accessToken) {
    const authHeader = {
        Authorization: "Bearer " + accessToken
    };
    const data = {
        current_password: pass,
        new_password: new_pass,
        re_new_password: re_new_pass,
    };
    return axios.post(apiUrl + '/users/set_password/', data, {headers: authHeader});
}

export function changeUsernameRequest(new_username, accessToken) {
    const authHeader = {
        Authorization: "Bearer " + accessToken
    };
    const data = {
        username: new_username
    };
    return axios.post(apiUrl + '/users/reset_username/', data, {headers: authHeader});
}

export function changeEmailRequest(email, accessToken) {
    const authHeader = {
        Authorization: "Bearer " + accessToken
    };
    const data = {
        email: email
    };
    return axios.post(apiUrl + '/users/reset_email/', data, {headers: authHeader});
}

export function addDirectionRequest(direction, accessToken) {
    const authHeader = {
        Authorization: "Bearer " + accessToken
    };
    const data = {
        direction: direction //string
    };
    return axios.post(apiUrl + '/directions/add/', data, {headers: authHeader});
}

export function getDirectionsRequest(accessToken) {
    const authHeader = {
        Authorization: "Bearer " + accessToken
    };
    return axios.get(apiUrl + '/directions/', {headers: authHeader});
}

export function deleteDirectionRequest(dirId, accessToken) {
    const authHeader = {
        Authorization: "Bearer " + accessToken
    };
    const data = {
        dirId: dirId
    };
    return axios.post(apiUrl + '/directions/delete/', data, {headers: authHeader});
}
