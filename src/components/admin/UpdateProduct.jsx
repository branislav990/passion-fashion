import { useContext, useState } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import instance from "../../utils/api";
import { UPDATE_PRODUCT } from "../../utils/actionTypes";
import "./updateProduct.css";

const UpdateProduct = ({ product, closeModal }) => {
    const { categories, productsDispatch } = useContext(ProductsContext);
    const [productUpdate, setProductUpdate] = useState({
        title: product.title,
        description: product.description,
        price: product.price,
        imgUrl: product.image,
        category: product.category,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductUpdate((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        instance
            .patch(`products/${product.id}`, {
                title: productUpdate.title,
                price: productUpdate.price,
                description: productUpdate.description,
                image: productUpdate.imgUrl,
                category: productUpdate.category,
            })
            .then((res) => {
                console.log(res.data);
                productsDispatch({
                    type: UPDATE_PRODUCT,
                    payload: res.data,
                });
            })
            .then(closeModal);
    };

    return (
        <div className="modal-update-wrapper">
            <div>
                <h3 className="modal-title">Update product #{product.id}</h3>
            </div>

            <div>
                <form onSubmit={handleSubmit}>
                    <div className="label-input-wrapper">
                        <label htmlFor="title">Title:</label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            value={productUpdate.title}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="label-input-wrapper">
                        <label htmlFor="description">Description:</label>
                        <textarea
                            name="description"
                            id="description"
                            value={productUpdate.description}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <div className="label-input-wrapper">
                        <label htmlFor="price">Price:</label>
                        <input
                            name="price"
                            id="price"
                            type="number"
                            value={productUpdate.price}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="label-input-wrapper img-input-wrapper">
                        <div className="img-input">
                            <label htmlFor="imgUrl">Image URL:</label>
                            <input
                                name="imgUrl"
                                id="imgUrl"
                                type="text"
                                value={productUpdate.imgUrl}
                                onChange={handleChange}
                            />
                        </div>

                        <span className="mng-img-wrapper">
                            <img
                                src={productUpdate.imgUrl}
                                alt={productUpdate.title}
                                width={100}
                            />
                        </span>
                    </div>
                    <div className="label-input-wrapper">
                        <label htmlFor="category">Category:</label>
                        <select
                            name="category"
                            id="category"
                            value={productUpdate.category}
                            onChange={handleChange}
                            className="custom-select"
                            style={{
                                color: "#1e507b",
                                backgroundColor: "white",
                            }}
                        >
                            {categories.map((category, index) => (
                                <option value={category.label} key={index}>
                                    {category.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="update-btn-wrapper">
                        <button
                            onClick={closeModal}
                            className="input-submit"
                            style={{
                                backgroundColor: "white",
                                color: "#0075c9",
                                marginTop: "0",
                            }}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="input-submit"
                            style={{
                                width: "10em",
                                marginTop: "0",
                            }}
                        >
                            UPDATE
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;
