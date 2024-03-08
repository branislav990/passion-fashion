import { useNavigate } from "react-router-dom";
import productNotFound from "../../assets/product-not-found.jpeg";
import "./productNotFound.css";

const ProductNotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="product-not-found">
            <button className="homepage-btn" onClick={() => navigate("/")}>
                Back to Home
            </button>
            <img src={productNotFound} alt="Product not found" />
        </div>
    );
};

export default ProductNotFound;
