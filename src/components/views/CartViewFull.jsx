import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import CartList from "../cart/CartList";
import Navbar from "../navbar/Navbar";
import ShippingInfo from "../cart/ShippingInfo";
import Footer from "./Footer";

const CartViewFull = () => {
    const { cartState } = useContext(CartContext);

    return (
        <div>
            <Navbar />

            <div className="cart-view-full">
                <div className="shipping-address">
                    <h2>Shipping address</h2>
                    <ShippingInfo />
                </div>
                <div className="cart-summary">
                    <h2>Order summary</h2>
                    <CartList cartState={cartState} />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CartViewFull;
