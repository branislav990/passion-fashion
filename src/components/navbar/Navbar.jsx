import logo from "../../assets/logo.png";
import Cart from "./Cart";
import "./navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

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
                <Cart />
            </div>
        </div>
    );
};

export default Navbar;
