import { REMOVE_TOKEN, SET_TOKEN } from "../utils/actionTypes";

export const authReducer = (state, action) => {
    switch (action.type) {
        case SET_TOKEN:
            return true;

        case REMOVE_TOKEN:
            return false;

        default:
            return state;
    }
};
