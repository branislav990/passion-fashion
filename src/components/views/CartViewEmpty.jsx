import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import emptyCartImg from "../../assets/empty-cart.png";
import Footer from "./Footer";

const CartViewEmpty = () => {
    return (
        <div>
            <Navbar />
            <div>
                <img
                    src={emptyCartImg}
                    alt="Empty cart"
                    className="empty-cart-img"
                />

                <h2>Your cart is empty</h2>

                <h3 className="fashion-collection">
                    <Link to={"/products"} className="stylish-fashion">
                        Return to the main page and explore our stylish fashion
                        collection
                    </Link>
                </h3>
            </div>
            {/* <Footer /> */}
        </div>
    );
};

export default CartViewEmpty;
