import { ReactComponent as Logo } from "../../assets/logo1.svg";
import Cart from "./Cart";
import "./navbar-style.css";
import { Link, useNavigate } from "react-router-dom";
import passionLogo from "../../assets/passion.PNG";

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div className="navbar">
            <div className="navbar-elements">
                <span className="company-logo">
                    <Logo
                        width="120"
                        onClick={() => navigate("/")}
                        style={{
                            cursor: "pointer",
                        }}
                    />
                </span>
                <Link to="/products">
                    <img
                        className="passion-logo"
                        src={passionLogo}
                        alt="passion for fashion logo"
                    />
                </Link>
                <Cart />
            </div>
        </div>
    );
};

export default Navbar;
