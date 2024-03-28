import { ADD_GLOBAL_CARTS, ADD_LOCAL_CART } from "../utils/actionTypes";
import { v4 as uuidv4 } from "uuid";

export const cartManagementReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case ADD_GLOBAL_CARTS:
            return state.length >= 7 &&
                [...state].some((cart) => cart.userId === 1)
                ? state
                : [...state, ...payload];

        case ADD_LOCAL_CART:
            return [...state, { ...payload, id: uuidv4() }];

        default:
            return state;
    }
};
