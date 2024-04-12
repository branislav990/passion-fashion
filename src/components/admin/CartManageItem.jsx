import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import trashCan from "../../assets/trash-can.png";
import "./cartManageItem.css";
import { CartManagementContext } from "../../contexts/CartManagementContext";
import { REMOVE_CART } from "../../utils/actionTypes";
import instance from "../../utils/api";

const CartManageItem = ({ cart }) => {
    const { products } = useContext(ProductsContext);
    const { cartManagementDispatch } = useContext(CartManagementContext);

    let totalPrice = 0;
    for (let product of products) {
        if (product.id > 8 && product.id < 15) continue;
        const matchingProduct = [...cart.products].find(
            (cartProduct) => cartProduct.productId === product.id
        );
        if (matchingProduct)
            totalPrice += product.price * matchingProduct.quantity;
    }

    const handleClick = (e) => {
        e.preventDefault();

        if (!isNaN(Number(cart.id))) {
            instance
                .delete(`/carts/${cart.id}`)
                .then((res) => console.log(res.data));
        }

        cartManagementDispatch({
            type: REMOVE_CART,
            payload: cart.id,
        });
    };

    return (
        <>
            {cart.products.every(
                (product) => product.productId > 8 && product.productId < 15
            ) ? null : (
                <tr>
                    <td>{cart.id}</td>
                    <td>{cart.userId}</td>
                    <td>{cart.date.split("T")[0]}</td>
                    <td>
                        {cart.products.map((product) =>
                            !(
                                // exclude products from the electronics category
                                (
                                    product.productId > 8 &&
                                    product.productId < 15
                                )
                            ) ? (
                                <div key={product.productId}>
                                    <span
                                        style={{
                                            display: "inline-block",
                                            textAlign: "right",
                                        }}
                                    >
                                        {product.productId} / {product.quantity}
                                    </span>
                                </div>
                            ) : null
                        )}
                    </td>
                    <td style={{}}>&pound;{totalPrice}</td>
                    <td>
                        <img
                            src={trashCan}
                            alt="Trash can"
                            className="trash-can-cart"
                            onClick={handleClick}
                            title="Remove cart"
                        />
                    </td>
                </tr>
            )}
        </>
    );
};

export default CartManageItem;
