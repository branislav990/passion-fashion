import { useContext, useState } from "react";
import { ReactComponent as CartEmpty } from "../../assets/cart-icon-empty.svg";
import { ReactComponent as CartFull } from "../../assets/cart-icon-full.svg";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";
import "./cart.css";

const Cart = () => {
    const { addedProducts, cartState } = useContext(CartContext);

    return (
        <div className="cart-items">
            <span className="cart-icon">
                {cartState.length > 0 ? (
                    <Link to={"/cart-full"}>
                        <CartFull fill="#E0EFFF" className="svg-item" />
                    </Link>
                ) : (
                    <Link to={"/cart-empty"}>
                        <CartEmpty fill="#E0EFFF" className="svg-item" />
                    </Link>
                )}
            </span>

            <span className="product-qnt">
                {addedProducts(cartState) > 0 ? addedProducts(cartState) : null}
            </span>
        </div>
    );
};

export default Cart;
