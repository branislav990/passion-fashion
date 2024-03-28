import { useEffect, useState } from "react";
import instance from "../../utils/api";
import Loading from "../loading/Loading";
import ProductsListItem from "./ProductsListItem";
import "./productsList.css";
import SortItems from "./SortItems";
import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import { SET_ITEMS } from "../../utils/actionTypes";
import FilterItems from "./FilterItems";
import Error from "../error/Error";

const ProductsList = () => {
    const { products, categories, productsDispatch } =
        useContext(ProductsContext);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

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
            ) : products.length ? (
                <div className="products-list-wrapper container">
                    <aside className="filters">
                        <FilterItems />
                        <SortItems />
                    </aside>
                    {categories.some((category) => category.isChecked) ? (
                        <div className=" products-list">
                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
                                {products
                                    .filter((product) =>
                                        categories.some(
                                            (category) =>
                                                category.label ===
                                                    product.category &&
                                                category.isChecked
                                        )
                                    )
                                    .map((product) => (
                                        <div
                                            className="col mb-5"
                                            key={product.id}
                                        >
                                            <ProductsListItem
                                                product={product}
                                            />
                                        </div>
                                    ))}
                            </div>
                        </div>
                    ) : (
                        <h1 className="no-product">
                            No product meets selected criteria
                        </h1>
                    )}
                </div>
            ) : (
                <Loading />
            )}
        </>
    );
};

export default ProductsList;
