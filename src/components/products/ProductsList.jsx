import { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import instance from "../../utils/api";
import Loading from "../loading/Loading";
import ProductsListItem from "./ProductsListItem";
import "./products.css";
import SortItems from "./SortItems";
import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import { SET_ITEMS } from "../../utils/actionTypes";
import FilterItems from "./FilterItems";
import Footer from "../views/Footer";
import Error from "../error/Error";

const ProductsList = () => {
    const { products, productsDispatch } = useContext(ProductsContext);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        instance
            .get("/products")
            .then((res) => {
                const excludedElectronics = res.data.filter(
                    (item) => item.category !== "electronics"
                );
                return excludedElectronics.map((prevProduct) => ({
                    ...prevProduct,
                    visible: true,
                }));
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
            .finally(() => setLoading(false));
    }, []);

    return (
        <>
            <Navbar />
            {loading ? (
                <Loading />
            ) : error ? (
                <Error />
            ) : (
                <>
                    <FilterItems />
                    <SortItems />
                    {products.some((product) => product.visible) ? (
                        <div className="products-list">
                            {products.map((product) =>
                                product.visible ? (
                                    <ProductsListItem
                                        key={product.id}
                                        product={product}
                                    />
                                ) : null
                            )}
                        </div>
                    ) : (
                        <h1>No product meets selected criteria</h1>
                    )}
                    <Footer />
                </>
            )}
        </>
    );
};

export default ProductsList;
