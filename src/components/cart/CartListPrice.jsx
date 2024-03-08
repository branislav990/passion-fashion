import { useContext, useEffect } from "react";
import { CartContext } from "../../contexts/CartContext";
import "./cartListPrice.css";
import { useNavigate } from "react-router-dom";

const CartListPrice = () => {
    const { cartState } = useContext(CartContext);

    const navigate = useNavigate();

    useEffect(() => {
        if (calculatePrice() == 0) navigate('/cart-empty')
    }, [])

    const calculatePrice = () => {
        let priceSum = 0;
        cartState.forEach((product) => {
            priceSum += product.count * product.price;
        });
        return priceSum;
    };

    return (
        <div className="price-wrapper">
            <div className="price-item">
                <p className="price-paragraph">Subtotal</p>
                <p className="price-paragraph">
                    &pound;{calculatePrice().toFixed(2)}
                </p>
            </div>
            <div className="price-item">
                <p className="price-paragraph">Shipping</p>
                <p className="price-paragraph">
                    {calculatePrice() < 100 ? "£10.00" : "Free"}
                </p>
            </div>
            <hr className="price-divider" />
            <div className="price-item">
                <h4 className="total-price">Total &#40;incl. VAT&#41;</h4>
                <h4 className="total-price">
                    {calculatePrice() < 100
                        ? `£${(calculatePrice() + 10).toFixed(2)}`
                        : `£${calculatePrice().toFixed(2)}`}
                </h4>
            </div>
        </div>
    );
};

export default CartListPrice;
