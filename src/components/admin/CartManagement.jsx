import { useContext, useEffect, useState } from "react";
import instance from "../../utils/api";
import { CartManagementContext } from "../../contexts/CartManagementContext";
import { ProductsContext } from "../../contexts/ProductsContext";
import { ADD_GLOBAL_CARTS, SET_ITEMS } from "../../utils/actionTypes";
import CartManageItem from "./CartManageItem";
import Error from "../error/Error";
import Loading from "../loading/Loading";
import "./cartManagement.css";

const CartManagement = () => {
    const { cartManagementState, cartManagementDispatch } = useContext(
        CartManagementContext
    );
    const { products, productsDispatch } = useContext(ProductsContext);
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

        instance.get("/carts").then((res) => {
            cartManagementDispatch({
                type: ADD_GLOBAL_CARTS,
                payload: res.data,
            });
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
                <div
                    className="container cart-management"
                    style={{ marginInline: "auto" }}
                >
                    <h1 style={{ marginBottom: "1em" }}>Cart Management</h1>
                    <div className="table-wrapper">
                        <table style={{ textAlign: "center" }}>
                            <thead>
                                <tr>
                                    <th>cart id</th>
                                    <th>user id</th>
                                    <th>order date</th>
                                    <th>
                                        <span>
                                            product
                                            <br /> id / quantity
                                        </span>
                                    </th>
                                    <th>total price</th>
                                    <th>remove cart</th>
                                </tr>
                            </thead>
                            <tbody style={{ width: "90%" }}>
                                {cartManagementState.length
                                    ? cartManagementState.map((cart) => (
                                          <CartManageItem
                                              key={cart.id}
                                              cart={cart}
                                          />
                                      ))
                                    : null}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </>
    );
};

export default CartManagement;
