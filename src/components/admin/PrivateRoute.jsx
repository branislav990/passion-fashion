import { isAuthenticated } from "../../utils/auth";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
    return isAuthenticated() ? children : <Navigate to="/login" {...rest} />;
};

export default PrivateRoute;
