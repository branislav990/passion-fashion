import { useContext } from "react";
import trashCan from "../../assets/trash-can.png";
import { CartContext } from "../../contexts/CartContext";
import { REMOVE_ITEM } from "../../utils/actionTypes";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

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

    return (
        <>
            <li className="cart-list-item">
                <Link to={`/products/${id}`}>
                    <div className="cart-item">
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
                <div className="cart-item">
                    &pound;{price}
                    <span className="price-count">
                        {count > 1 ? ` x${count}` : null}
                    </span>
                </div>
                <span className="trash-can" onClick={handleClick}>
                    <img
                        className="trash-can-icon"
                        src={trashCan}
                        alt="trash can"
                    />
                </span>
            </li>
        </>
    );
};

export default CartListItem;
