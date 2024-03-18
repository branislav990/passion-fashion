import { useContext, useState } from "react";
import singleCart from "../../assets/add-cart.png";
import { ADD_ITEM } from "../../utils/actionTypes";
import { CartContext } from "../../contexts/CartContext";

const CartGrid = ({ product }) => {
    const { cartDispatch } = useContext(CartContext);

    const handleClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        cartDispatch({
            type: ADD_ITEM,
            payload: { product, count: 1 },
        });
    };

    return (
        <div onClick={handleClick}>
            <img
                src={singleCart}
                alt="Increment product count"
                className="increment-count"
            />
        </div>
    );
};

export default CartGrid;
