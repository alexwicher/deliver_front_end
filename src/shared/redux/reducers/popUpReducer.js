import {TOGGLE_POP_UP} from "../actionTypes";

export const popUpReducer = (state = {visible: false, msg: ''}, action) => {
    switch (action.type) {
        case TOGGLE_POP_UP:
            return {...state, visible: !state.visible, msg: action.msg};
        default:
            return state;
    }
};