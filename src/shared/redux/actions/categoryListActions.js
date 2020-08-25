import {FAIL_CATEGORY_LIST_ACTION, FILL_CATEGORY_LIST_ACTION, REQUEST_CATEGORY_LIST_ACTION} from "../actionTypes";
import {getAllCategories} from "../../api";

export const requestCategoryList = () => {
    return {type: REQUEST_CATEGORY_LIST_ACTION};
};
export const fillCategoryList = (categories) => {
    return {
        type: FILL_CATEGORY_LIST_ACTION,
        categories: categories
    };
};
export const failCategoryList = (error) => {
    return {
        type: FAIL_CATEGORY_LIST_ACTION,
        error: error
    };
};

export const fetchCategoryList = () => {
    return (dispatch) => {
        dispatch(requestCategoryList());
        getAllCategories().then(response => {
            const categories = response.data;
            dispatch(fillCategoryList(categories));
        }).catch(error => {
                dispatch(failCategoryList(error.message))
            }
        )
    }
};
