import "./App.css";
import Navbar from "./components/navbar/Navbar";
import HomeView from "./components/views/HomeView";
import { Routes, Route, Link } from "react-router-dom";
import ProductsList from "./components/products/ProductsList";
import SingleProduct from "./components/products/SingleProduct";
import CartContextProvider from "./contexts/CartContext";
import CartViewEmpty from "./components/views/CartViewEmpty";
import CartViewFull from "./components/views/CartViewFull";
import ProductsContextProvider from "./contexts/ProductsContext";
import PrivacyPolicy from "./components/views/PrivacyPolicy";
import TermsOfService from "./components/views/TermsOfService";
import PageNotFound from "./components/views/PageNotFound";
import ContactUs from "./components/views/ContactUs";
import ProductNotFound from "./components/views/ProductNotFound";

function App() {

    // const 

    return (
        <div className="App">
            {/* <HomeView /> */}
            {/* <Navbar /> */}
            {/* <ProductsView /> */}
            <ProductsContextProvider>
                <CartContextProvider>
                    <Routes>
                        <Route path="/products" element={<ProductsList />} />
                        <Route
                            path="/products/:productId"
                            element={<SingleProduct />}
                        />

                        <Route path="/cart-empty" element={<CartViewEmpty />} />
                        <Route path="/cart-full" element={<CartViewFull />} />

                        <Route
                            path="/privacy-policy"
                            element={<PrivacyPolicy />}
                        />
                        <Route
                            path="/terms-of-service"
                            element={<TermsOfService />}
                        />
                        <Route path="/contact-us" element={<ContactUs />} />

                        <Route path="/" element={<HomeView />} />

                        <Route path="/product-not-found" element={<ProductNotFound />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </CartContextProvider>
            </ProductsContextProvider>
        </div>
    );
}

export default App;
