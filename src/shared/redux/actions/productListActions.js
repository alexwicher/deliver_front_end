import {
    CATEGORY_FILTER_PRODUCT_LIST,
    FAIL_PRODUCT_LIST_ACTION,
    FILL_PRODUCT_LIST_ACTION,
    REQUEST_PRODUCT_LIST_ACTION
} from "../actionTypes";
import {getAllProducts} from "../../api";

export const requestProductList = () => {
    return {type: REQUEST_PRODUCT_LIST_ACTION};
};
export const filterProductListByCategory = (catID) => {
    return {type: CATEGORY_FILTER_PRODUCT_LIST,
            categoryID: catID};
};
export const fillProductList = (products) => {
    return {
        type: FILL_PRODUCT_LIST_ACTION,
        products: products
    };
};
export const failProductList = (error) => {
    return {
        type: FAIL_PRODUCT_LIST_ACTION,
        error: error
    };
};

export const fetchProductList = (category_id = 0) => {
    return (dispatch) => {
        dispatch(requestProductList());
        getAllProducts(category_id).then(response => {
            const products = response.data;
            dispatch(fillProductList(products));
        }).catch(error => {
                dispatch(failProductList(error.message))
            }
        )
    }
};
