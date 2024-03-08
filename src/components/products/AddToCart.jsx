import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { ADD_ITEM } from "../../utils/actionTypes";

const AddToCart = ({ product }) => {
    const [count, setCount] = useState(1);
    const { cartDispatch } = useContext(CartContext);

    const handleClick = () => {
        if (count > 0)
            cartDispatch({
                type: ADD_ITEM,
                payload: { product, count },
            });
    };

    return (
        <div className="addToCart-wrapper">
            <input
                className="input-quantity"
                type="number"
                value={count}
                onChange={(e) =>
                    setCount(parseInt(e.target.value.replace(/[^0-9]/g, "")))
                }
            />
            <button className="add-to-cart" onClick={handleClick}>
                ADD TO CART
            </button>
        </div>
    );
};

export default AddToCart;
