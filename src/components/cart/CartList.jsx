import { useContext } from "react";
import CartListItem from "./CartListItem";
import CartListPrice from "./CartListPrice";
import "./cart-list.css";
import { CartContext } from "../../contexts/CartContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { EMPTY_CART } from "../../utils/actionTypes";

const CartList = ({ cartState }) => {
    const { cartDispatch } = useContext(CartContext);
    const navigate = useNavigate();

    const handleClick = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You are about to remove all the items from the cart!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, remove all!",
        }).then((result) => {
            if (result.isConfirmed) {
                cartDispatch({ type: EMPTY_CART });
                navigate("/cart-empty");
            }
        });
    };

    return (
        <div className="order-summary">
            <ul className="cart-list">
                {cartState.map((item) => (
                    <CartListItem
                        className="cart-list-item"
                        key={item.id}
                        item={item}
                    />
                ))}
            </ul>
            <div className="delete-wrapper">
                <span className="placeholder"></span>
                <button className="delete-all" onClick={handleClick}>
                    Remove All
                </button>
            </div>
            <CartListPrice />
        </div>
    );
};

export default CartList;
