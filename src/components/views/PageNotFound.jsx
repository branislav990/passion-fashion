import { useNavigate } from "react-router-dom";
import fourOfour from "../../assets/404-error-template.jpg";
import "./pageNotFound.css";

const PageNotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="four-o-four">
            <button className="homepage-btn" onClick={() => navigate("/")}>
                Back to Home
            </button>
            <img src={fourOfour} alt="404 - not found" />
        </div>
    );
};

export default PageNotFound;
