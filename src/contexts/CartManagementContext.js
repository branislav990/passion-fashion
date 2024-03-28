import { createContext, useReducer } from "react";
import { cartManagementReducer } from "../reducers/cartManagementReducer";

export const CartManagementContext = createContext();

const CartManagementProvider = ({ children }) => {
    const [cartManagementState, cartManagementDispatch] = useReducer(
        cartManagementReducer,
        []
    );

    return (
        <CartManagementContext.Provider
            value={{ cartManagementState, cartManagementDispatch }}
        >
            {children}
        </CartManagementContext.Provider>
    );
};

export default CartManagementProvider;
