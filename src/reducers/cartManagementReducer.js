import {
    ADD_GLOBAL_CARTS,
    ADD_LOCAL_CART,
    REMOVE_CART,
} from "../utils/actionTypes";
import { v4 as uuidv4 } from "uuid";

export const cartManagementReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case ADD_GLOBAL_CARTS:
            return (
                // provera da li su već preuzete korpe sa servera
                state.length >= 7 &&
                    [...state].some((cart) => cart.userId === 1)
                    ? // ukoliko jesu, nemoj opet da dodaješ
                      state
                    : // ukoliko nisu, dodaj ih
                      [...state, ...payload]
            );

        case ADD_LOCAL_CART:
            return [...state, { ...payload, id: uuidv4() }];

        case REMOVE_CART:
            return [...state].filter((cart) => cart.id != payload);

        default:
            return state;
    }
};
