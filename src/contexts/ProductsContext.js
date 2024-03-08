import { createContext, useReducer } from "react";
import { productsReducer } from "../reducers/productsReducer";

export const ProductsContext = createContext();

const initialState = {
    products: [],
    categories: [],
    sorted: "default",
};

const ProductsContextProvider = ({ children }) => {
    const [productsState, productsDispatch] = useReducer(
        productsReducer,
        initialState
    );

    const { products, categories, sorted } = productsState;

    return (
        <ProductsContext.Provider
            value={{ products, categories, sorted, productsDispatch }}
        >
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductsContextProvider;
