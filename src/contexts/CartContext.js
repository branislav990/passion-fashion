import { createContext, useReducer } from "react";
import { cartReducer } from "../reducers/cartReducer";

export const CartContext = createContext();

const initialState = [];

const CartContextProvider = ({ children }) => {
    const [cartState, cartDispatch] = useReducer(cartReducer, initialState);

    const addedProducts = (state) => {
        let sumProducts = 0;
        state.forEach((product) => {
            sumProducts += product.count;
        });
        return sumProducts;
    };

    return (
        <CartContext.Provider value={{ cartState, cartDispatch, addedProducts }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
