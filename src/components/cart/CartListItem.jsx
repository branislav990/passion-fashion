import { useContext } from "react";
import trashCan from "../../assets/trash-can.png";
import { CartContext } from "../../contexts/CartContext";
import {
    ADD_ITEM,
    REMOVE_ITEM,
    SUBTRACT_ITEM,
    EMPTY_CART,
} from "../../utils/actionTypes";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./cartListItem.css";

const CartListItem = ({ item }) => {
    const { image, title, price, count, id } = item;
    const { cartState, cartDispatch } = useContext(CartContext);
    const navigate = useNavigate();

    const handleClick = () => {
        cartDispatch({
            type: REMOVE_ITEM,
            payload: { id },
        });
        if (cartState.length == 1) navigate("/cart-empty");
    };

    const handleSutraction = () =>
        count === 1
            ? {}
            : cartDispatch({
                  type: SUBTRACT_ITEM,
                  payload: { product: item },
              });
    return (
        <>
            <li className="cart-list-item">
                <Link to={`/products/${id}`}>
                    <div className="cart-item-small">
                        <img
                            src={image}
                            alt={title}
                            className="cart-item-img"
                        />
                    </div>
                </Link>
                <div className="cart-item">
                    <span className="cart-item-title">{title}</span>
                </div>
                <div className="cart-item-price-wrapper">
                    <div className="cart-item-price">
                        <span className="price-count">
                            <button
                                style={{
                                    border: "none",
                                    borderRadius: "30em",
                                    backgroundColor: "rgba(1, 1, 1, 0)",
                                    color: "#1E507B",
                                }}
                                onClick={handleSutraction}
                            >
                                -
                            </button>
                            {count}
                            <button
                                style={{
                                    border: "none",
                                    borderRadius: "30em",
                                    backgroundColor: "rgba(1, 1, 1, 0)",
                                    color: "#1E507B",
                                }}
                                onClick={() =>
                                    cartDispatch({
                                        type: ADD_ITEM,
                                        payload: {
                                            product: item,
                                            count: 1,
                                        },
                                    })
                                }
                            >
                                +
                            </button>
                        </span>
                        <span>&pound;{price}</span>
                    </div>
                </div>

                <span className="trash-can" onClick={handleClick}>
                    <img
                        className="trash-can-icon"
                        src={trashCan}
                        alt="trash can"
                        title="Remove Item"
                    />
                </span>
            </li>
        </>
    );
};

export default CartListItem;
