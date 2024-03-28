import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import instance from "../../utils/api";
import { useNavigate } from "react-router-dom";
import { ADD_PRODUCT, SET_ITEMS } from "../../utils/actionTypes";
import Error from "../error/Error";
import "./addNewProduct.css";
import addImage from "../../assets/add-image.png";

const AddNewProduct = () => {
    const [error, setError] = useState(false);
    const { products, productsDispatch, categories } =
        useContext(ProductsContext);

    const [newProduct, setNewProduct] = useState({
        title: "",
        description: "",
        price: "",
        imgUrl: "",
        category: "",
    });

    const navigate = useNavigate();

    useEffect(() => {
        if (!products.length)
            instance
                .get("/products")
                .then((res) => {
                    return res.data.filter(
                        (item) => item.category !== "electronics"
                    );
                })
                .then((products) => {
                    instance.get("/products/categories").then((res) => {
                        const excludedElectronics = res.data.filter(
                            (item) => item !== "electronics"
                        );
                        productsDispatch({
                            type: SET_ITEMS,
                            payload: {
                                products: products,
                                categories: excludedElectronics,
                            },
                        });
                    });
                })
                .catch(() => setError(true));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewProduct((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        instance
            .post("/products", {
                title: newProduct.title,
                price: parseInt(newProduct.price),
                description: newProduct.description,
                image: newProduct.imgUrl,
                category: newProduct.category,
                rating: 0,
            })
            .then((res) => {
                console.log(res.data);
                if (products.length < 15)
                    productsDispatch({
                        type: ADD_PRODUCT,
                        payload: res.data,
                    });
            })
            .then(navigate("/product-management"));
    };

    return error ? (
        <div className="error">
            <Error />
        </div>
    ) : (
        <form onSubmit={handleSubmit} className="add-new-product-form container">
            <div className="add-product-wrapper">
                <input
                    type="text"
                    name="title"
                    value={newProduct.title}
                    placeholder="Product Title"
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="add-product-wrapper">
                <textarea
                    name="description"
                    value={newProduct.description}
                    cols="30"
                    rows="10"
                    placeholder="Product Description"
                    onChange={handleChange}
                    required
                ></textarea>
            </div>
            <div className="add-product-wrapper">
                <input
                    type="number"
                    name="price"
                    value={newProduct.price}
                    placeholder="Price"
                    onChange={handleChange}
                    required
                    style={{ marginBottom: "0" }}
                />
            </div>
            <div className="add-product-wrapper img-input-wrapper">
                <input
                    type="text"
                    name="imgUrl"
                    value={newProduct.imgUrl}
                    placeholder="Product Image URL"
                    onChange={handleChange}
                    required
                />
                <div
                    className="mng-img-wrapper"
                    style={{
                        borderRadius: "0.5em",
                        marginBottom: "1.3em",
                        boxShadow: "none",
                    }}
                >
                    <img
                        src={newProduct.imgUrl ? newProduct.imgUrl : addImage}
                        alt="New Product Image"
                    />
                </div>
            </div>
            <div className="add-product-wrapper">
                <select
                    name="category"
                    value={newProduct.category}
                    onChange={handleChange}
                    required
                    className="custom-select"
                    style={{
                        color: "rgba(30, 80, 123, 0.7)",
                        backgroundColor: "white",
                        padding: "0.2em",
                    }}
                >
                    <option disabled hidden value="">
                        Select category
                    </option>
                    {categories.length
                        ? categories.map((category, index) => (
                              <option value={category.label} key={index}>
                                  {category.label}
                              </option>
                          ))
                        : null}
                </select>
            </div>
            <input
                type="submit"
                value="ADD PRODUCT"
                className="input-submit"
                style={{ marginTop: "1em" }}
            />
        </form>
    );
};

export default AddNewProduct;
