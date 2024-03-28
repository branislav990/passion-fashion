import { createContext, useReducer } from "react";
import { isAuthenticated } from "../utils/auth";
import { authReducer } from "../reducers/authReducer";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [authState, authDispatch] = useReducer(
        authReducer,
        isAuthenticated()
    );

    return (
        <AuthContext.Provider value={{ authState, authDispatch }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
