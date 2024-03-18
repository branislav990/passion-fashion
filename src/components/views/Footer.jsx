import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="footer">
                <div>
                    <h4 className="footer-header">
                        &copy; 2024 FASHION PASSION
                    </h4>
                </div>
                <div className="footer-links">
                    <Link to="/privacy-policy" className="footer-link">
                        <span className="footer-element">Privacy Policy</span>
                    </Link>
                    <Link to="/terms-of-service" className="footer-link">
                        <span className="footer-element">Terms of Service</span>
                    </Link>
                    <Link to="/contact-us" className="footer-link">
                        <span className="footer-element">Contact Us</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
