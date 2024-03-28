import { useContext, useEffect, useState } from "react";
import ProductManageItem from "./ProductManageItem";
import instance from "../../utils/api";
import { SET_ITEMS } from "../../utils/actionTypes";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../../contexts/ProductsContext";
import Error from "../error/Error";
import Loading from "../loading/Loading";
import "./productManagement.css";

const ProductManagement = () => {
    const { products, productsDispatch } = useContext(ProductsContext);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        products.length
            ? setLoading(false)
            : instance
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
                  .catch(() => setError(true))
                  .finally(() => {
                      setLoading(false);
                  });
    }, []);

    return (
        <>
            {loading ? (
                <Loading />
            ) : error ? (
                <div className="error">
                    <Error />
                </div>
            ) : (
                <div className="container">
                    <p className="product-management-list-item product-management-header">
                        <div className="product-management-first-3">
                            <div className="product-management-img-title product-management-img-title-header">
                                <span>Image</span>
                                <span className="p-m-title">Title</span>
                            </div>
                            <span className="p-m-price">Price</span>
                        </div>
                        <div className="product-management-icons"></div>
                    </p>
                    <ul className="product-management-list">
                        {products.length
                            ? products.map((product) => (
                                  <ProductManageItem
                                      product={product}
                                      key={product.id}
                                  />
                              ))
                            : null}
                    </ul>
                    <button
                        onClick={() => navigate("/add-new-product")}
                        className="add-new-product"
                    >
                        ADD NEW PRODUCT
                    </button>
                </div>
            )}
        </>
    );
};

export default ProductManagement;
