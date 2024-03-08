import { useContext, useState } from "react";
import "./shippingInfo.css";
import instance from "../../utils/api";
import { v4 as uuidv4 } from "uuid";
import { CartContext } from "../../contexts/CartContext";
import { EMPTY_CART } from "../../utils/actionTypes";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const ShippingInfo = () => {
    const [user, setUser] = useState({
        fullName: "",
        streetAddress: "",
        postCode: "",
        city: "",
        phone: "",
        email: "",
    });

    const { cartState, cartDispatch } = useContext(CartContext);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;

        setUser((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let cartProducts = [];
        cartState.forEach((product) => {
            const cartProduct = {
                productId: product.id,
                quiantity: product.count,
            };
            cartProducts.push(cartProduct);
        });

        instance
            .post("/carts", {
                userId: uuidv4(),
                date: new Date().toLocaleDateString("en-CA"),
                products: cartProducts,
            })
            .then((res) => console.log(res));

        cartDispatch({ type: EMPTY_CART });

        Swal.fire({
            title: "Thank you for your purchase!",
            text: "Your items are on their way to your address.",
            showCancelButton: false,
            confirmButtonColor: "#007560",
            confirmButtonText: "Back to homepage",
            customClass: { container: "alert-submit" },
        }).then((result) => {
            if (result.isConfirmed) navigate("/");
        });
    };

    return (
        <form onSubmit={handleSubmit} className="shipping-form">
            <div className="input-rest">
                <input
                    className="shipping-input"
                    type="text"
                    name="fullName"
                    value={user.fullName}
                    placeholder="Full Name"
                    required
                    onChange={handleChange}
                />
            </div>

            <div className="input-rest">
                <input
                    className="shipping-input"
                    type="text"
                    name="streetAddress"
                    value={user.streetAddress}
                    placeholder="Street Address"
                    required
                    onChange={handleChange}
                />
            </div>

            <div className="input-rest">
                <input
                    className="shipping-input"
                    type="text"
                    name="postCode"
                    value={user.postCode}
                    placeholder="Postal Code"
                    required
                    onChange={handleChange}
                />
            </div>
            <div className="input-rest">
                <input
                    className="shipping-input"
                    type="text"
                    name="city"
                    value={user.city}
                    placeholder="City"
                    required
                    onChange={handleChange}
                />
            </div>
            <div className="input-rest">
                {" "}
                <input
                    className="shipping-input"
                    type="text"
                    name="phone"
                    value={user.phone}
                    placeholder="Phone for Delivery Contact"
                    required
                    onChange={handleChange}
                />
            </div>
            <div className="input-rest">
                <input
                    className="shipping-input"
                    type="email"
                    name="email"
                    value={user.email}
                    placeholder="Email for Order Tracking"
                    required
                    onChange={handleChange}
                />
            </div>

            <input
                type="submit"
                value="Complete Order"
                className="input-submit"
            />
        </form>
    );
};

export default ShippingInfo;
