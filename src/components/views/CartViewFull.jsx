import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import CartList from "../cart/CartList";
import ShippingInfo from "../cart/ShippingInfo";
import "./cartViewFull.css";

const CartViewFull = () => {
    const { cartState } = useContext(CartContext);

    return (
        <div>
            <div className="cart-view-full container">
                <div className="cart-summary">
                    <h2>Order summary</h2>
                    <CartList cartState={cartState} />
                </div>
                <div className="shipping-address">
                    <h2>Shipping address</h2>
                    <ShippingInfo />
                </div>
            </div>
        </div>
    );
};

export default CartViewFull;
