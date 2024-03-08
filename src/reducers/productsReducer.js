import {
    FILTER_ITEMS,
    SET_ITEMS,
    SORT_FILTERED_ITEMS,
    SORT_ITEMS,
} from "../utils/actionTypes";

export const productsReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_ITEMS:
            let categories = [];
            payload.categories.forEach((category) =>
                categories.push({ label: category, isChecked: true })
            );
            return { ...state, categories, products: payload.products };

        case SORT_ITEMS:
            if (payload.sortBy === "ascending")
                return {
                    ...state,
                    sorted: payload.sortBy,
                    products: [...state.products].sort(
                        (a, b) => a.price - b.price
                    ),
                };
            else if (payload.sortBy === "descending")
                return {
                    ...state,
                    sorted: payload.sortBy,
                    products: [...state.products].sort(
                        (a, b) => b.price - a.price
                    ),
                };
            else
                return {
                    ...state,
                    sorted: payload.sortBy,
                    products: payload.products,
                };

        case FILTER_ITEMS:
            return {
                ...state,
                categories: payload.categories,
                products: [...state.products].map((product) =>
                    product.category === payload.category
                        ? { ...product, visible: payload.isChecked }
                        : product
                ),
            };

        case SORT_FILTERED_ITEMS: // after fetching new items through filtering
            let newState = {
                sorted: state.sorted,
                categories: payload.categories,
                products: [...payload.products].map((product) => {
                    const matchedCategory = payload.categories.find(
                        (cat) => cat.label === product.category
                    );
                    return {
                        ...product,
                        visible: matchedCategory.isChecked,
                    };
                }),
            };
            console.log(newState);
            if (state.sorted === "ascending")
                return {
                    ...newState,
                    products: [...newState.products].sort(
                        (a, b) => a.price - b.price
                    ),
                };
            else if (state.sorted === "descending")
                return {
                    ...newState,
                    products: [...newState.products].sort(
                        (a, b) => b.price - a.price
                    ),
                };
            else return newState;

        default:
            return state;
    }
};
