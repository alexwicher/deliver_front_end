import axios from 'axios';

var apiUrl = 'http://127.0.0.1:8000/';

export function getAllProducts(categoryID = 0) {
    const data = {
        category_id:categoryID
    };
    return axios.post(apiUrl+'products/',data);
}
export function getAllCategories() {
    return axios.get(apiUrl+'categories/');
}