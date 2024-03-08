import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div>
                <h4>&copy; 2024 ART APPAREL - PASSION FOR FASHION</h4>
            </div>
            <Link to="/privacy-policy">
                <span>Privacy Policy</span>
            </Link>
            <Link to="/terms-of-service">
                <span>Terms of Service</span>
            </Link>
            <Link to="/contact-us">
                <span>Contact Us</span>
            </Link>
        </div>
    );
};

export default Footer;
