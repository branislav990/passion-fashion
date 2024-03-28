import {
    ADD_PRODUCT,
    DELETE_ITEM,
    FILTER_ITEMS,
    SET_ITEMS,
    SORT_ITEMS,
    UPDATE_PRODUCT,
} from "../utils/actionTypes";

export const productsReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_ITEMS:
            let categories = [];
            if (payload.categories)
                payload.categories.forEach((category) =>
                    categories.push({ label: category, isChecked: true })
                );

            if (state.sorted == "ascending")
                return state.categories.length
                    ? {
                          ...state,
                          products: payload.products.sort(
                              (a, b) => a.price - b.price
                          ),
                      }
                    : {
                          ...state,
                          categories,
                          products: payload.products.sort(
                              (a, b) => a.price - b.price
                          ),
                      };
            else if (state.sorted == "descending")
                return state.categories.length
                    ? {
                          ...state,
                          products: payload.products.sort(
                              (a, b) => b.price - a.price
                          ),
                      }
                    : {
                          ...state,
                          categories,
                          products: payload.products.sort(
                              (a, b) => b.price - a.price
                          ),
                      };
            else
                return state.categories.length
                    ? { ...state, products: payload.products }
                    : { ...state, categories, products: payload.products };

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
            };

        case DELETE_ITEM:
            return {
                ...state,
                products: [...state.products].filter(
                    (product) => product.id !== payload
                ),
            };

        case ADD_PRODUCT:
            const products = [...state.products];
            products.push(payload);
            return { ...state, products };

        case UPDATE_PRODUCT:
            // console.log(payload);
            return {
                ...state,
                products: [...state.products].map((product) =>
                    product.id === payload.id
                        ? {
                              ...product,
                              title: payload.title,
                              description: payload.description,
                              price: payload.price,
                              image: payload.image,
                              category: payload.category,
                          }
                        : product
                ),
            };

        default:
            return state;
    }
};
