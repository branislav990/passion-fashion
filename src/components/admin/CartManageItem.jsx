import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";

const CartManageItem = ({ cart }) => {
    const { products } = useContext(ProductsContext);

    let totalPrice = 0;
    for (let product of products) {
        if (product.id > 8 && product.id < 15) continue;
        const matchingProduct = [...cart.products].find(
            (cartProduct) => cartProduct.productId === product.id
        );
        if (matchingProduct)
            totalPrice += product.price * matchingProduct.quantity;
    }

    return (
        <>
            {cart.products.every(
                (product) => product.productId > 8 && product.productId < 15
            ) ? null : (
                <tbody>
                    <tr>
                        <td>{cart.id}</td>
                        <td>{cart.userId}</td>
                        <td>{cart.date.split("T")[0]}</td>
                        <td>
                            {cart.products.map((product) =>
                                !(
                                    product.productId > 8 &&
                                    product.productId < 15
                                ) ? (
                                    <div key={product.productId}>
                                        <span style={{ marginRight: "2em" }}>
                                            {product.productId}
                                        </span>
                                        <span>{product.quantity}</span>
                                    </div>
                                ) : null
                            )}
                        </td>
                        <td>{totalPrice}</td>
                    </tr>
                </tbody>
                // <li
                //     style={{
                //         display: "flex",
                //         justifyContent: "space-around",
                //         borderBottom: "1px solid black",
                //     }}
                // >
                //     <span>{cart.id}</span>
                //     <span>{cart.userId}</span>
                //     <span>{cart.date.split("T")[0]}</span>
                //     <div style={{ display: "flex", flexDirection: "column" }}>
                //         {cart.products.map((product) =>
                //             !(
                //                 product.productId > 8 && product.productId < 15
                //             ) ? (
                //                 <div key={product.productId}>
                //                     <span>{product.productId}</span>
                //                     <span>{product.quantity}</span>
                //                 </div>
                //             ) : null
                //         )}
                //     </div>
                //     <span>{totalPrice}</span>
                // </li>
            )}
        </>
    );
};

export default CartManageItem;
