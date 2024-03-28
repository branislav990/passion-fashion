import logo from "../../assets/logo.png";
import Cart from "./Cart";
import "./navbar.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { isAuthenticated } from "../../utils/auth";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { REMOVE_TOKEN } from "../../utils/actionTypes";

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { authState, authDispatch } = useContext(AuthContext);

    const handleLogout = () => {
        localStorage.removeItem("token");
        authDispatch({ type: REMOVE_TOKEN });
        if (
            location.pathname === "/admin" ||
            location.pathname === "/product-management" ||
            location.pathname === "/cart-management" ||
            location.pathname === "/add-new-product"
        )
            navigate("/login");
    };

    return (
        <div className="navbar">
            <div className="navbar-elements">
                <span className="company-logo">
                    <img
                        className="main-logo"
                        src={logo}
                        alt="Logo"
                        onClick={() => navigate("/")}
                    />
                </span>
                <div
                    style={{
                        gap: "5em",
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    {authState ? (
                        <div className="admin-logout">
                            <Link
                                to="/admin"
                                style={{
                                    textDecoration: "none",
                                    color: "#E0EFFF",
                                }}
                            >
                                <h4>Admin</h4>
                            </Link>
                            <button
                                onClick={handleLogout}
                                className="btn-logout"
                            >
                                (logout)
                            </button>
                        </div>
                    ) : (
                        <Link
                            to={"/login"}
                            style={{ textDecoration: "none", color: "#E0EFFF" }}
                        >
                            <h4>Login</h4>
                        </Link>
                    )}
                </div>
                <Cart />
            </div>
        </div>
    );
};

export default Navbar;
