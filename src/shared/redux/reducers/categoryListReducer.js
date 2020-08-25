import {FAIL_CATEGORY_LIST_ACTION, FILL_CATEGORY_LIST_ACTION, REQUEST_CATEGORY_LIST_ACTION} from "../actionTypes";

const initialState = {loading: false, categories: [], error: ''};

export const categoryListReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_CATEGORY_LIST_ACTION:
            return {...state, loading: true};
        case FILL_CATEGORY_LIST_ACTION:
            return {...state, loading: false, categories: action.categories};
        case FAIL_CATEGORY_LIST_ACTION:
            return {...state, loading: false, error: action.error};
        default:
            return state;
    }
};