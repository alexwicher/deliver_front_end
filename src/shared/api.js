import axios from 'axios';

export var apiUrl = 'http://127.0.0.1:8000';

// for request that require login user { 'Authorization': 'Bearer <my token>' } to data

export function getAllProducts(categoryID = 0) {
    const data = {
        category_id:categoryID
    };
    return axios.post(apiUrl + '/products/', data);
}
export function getAllCategories() {
    return axios.get(apiUrl+'/categories/');
}

export function registerUser(username,password,email,re_password) {
    const data ={
        username:username,
        password:password,
        re_password:re_password,
        email:email
    };
    return axios.post(apiUrl + '/auth/users/', data);
}
export function loginUser(username,password) {
    const data ={
        username:username,
        password:password,
    };
    return axios.post(apiUrl+'/auth/jwt/create/',data);
}

export function resetPassword(email) {
    const data ={
        email:email,
    };
    return axios.post(apiUrl+'/auth/users/reset_password/',data);
}

export function resetPasswordConfirm(uid,token,newPass,re_newPass) {
    const data ={
        uid:uid,
        token:token,
        new_password:newPass,
        re_new_password:re_newPass
    };
    return axios.post(apiUrl+'/auth/users/reset_password_confirm/',data);
}

export function createOrderRequest(uid,orderItems) {
    const data ={
        uid:uid,
        orderItems:orderItems,
    };
    return axios.post(apiUrl+'/order/create/',data);
}
