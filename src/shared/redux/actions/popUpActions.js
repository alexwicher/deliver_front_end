import {TOGGLE_POP_UP} from "../actionTypes";

export const togglePopUp = (msg = '') => {
    return {type: TOGGLE_POP_UP, msg: msg};
};
