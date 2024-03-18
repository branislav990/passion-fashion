import { Link } from "react-router-dom";
import emptyCartImg from "../../assets/empty-cart.png";
import "./cartViewEmpty.css";

const CartViewEmpty = () => {
    return (
        <div className="cart-empty container">
            <img
                src={emptyCartImg}
                alt="Empty cart"
                className="empty-cart-img"
            />

            <h2>Your cart is empty</h2>

            <h3 className="return-to-main-page">
                <Link to={"/products"} className="stylish-fashion">
                    Return to the main page and explore our stylish fashion
                    collection
                </Link>
            </h3>
        </div>
    );
};

export default CartViewEmpty;
