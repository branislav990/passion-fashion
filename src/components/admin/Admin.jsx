import { useNavigate } from "react-router-dom";
import "./admin.css";

const Admin = () => {
    const navigate = useNavigate();

    return (
        <div className="admin-wrapper container">
            <h1 className="admin-title">What do you want to do next?</h1>
            <div className="admin-btns">
                <button onClick={() => navigate("/product-management")} className="btn-product-management">
                    Product Management
                </button>
                <button onClick={() => navigate("/cart-management")} className="btn-cart-management">
                    Cart Management
                </button>
            </div>
        </div>
    );
};

export default Admin;
