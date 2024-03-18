import {
    ADD_ITEM,
    EMPTY_CART,
    REMOVE_ITEM,
    SUBTRACT_ITEM,
} from "../utils/actionTypes";

export const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case ADD_ITEM:
            let updatedState = [...state];

            const existingProductIndex = state.findIndex(
                (product) => product.id === payload.product.id
            );

            if (existingProductIndex !== -1) {
                // Product exists, update its count
                updatedState[existingProductIndex] = {
                    ...updatedState[existingProductIndex],
                    count:
                        updatedState[existingProductIndex].count +
                        payload.count,
                };
            } else {
                // Product doesn't exist, add it to updatedState
                updatedState.push({ ...payload.product, count: payload.count });
            }

            return updatedState;

        case REMOVE_ITEM:
            return state.filter((product) => product.id !== payload.id);

        case SUBTRACT_ITEM:
            return state.map((product) =>
                product.id == payload.product.id
                    ? { ...product, count: product.count - 1 }
                    : product
            );

        case EMPTY_CART:
            return [];

        default:
            return state;
    }
};
