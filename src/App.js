import "./App.css";
import { Routes, Route } from "react-router-dom";
import CartContextProvider from "./contexts/CartContext";
import ProductsContextProvider from "./contexts/ProductsContext";
import CartManagementProvider from "./contexts/CartManagementContext";
import AuthContextProvider from "./contexts/AuthContext";
import { isAuthenticated } from "./utils/auth";
import PrivateRoute from "./components/admin/PrivateRoute";
import {
    Navbar,
    HomeView,
    ProductsList,
    SingleProduct,
    CartViewEmpty,
    CartViewFull,
    PrivacyPolicy,
    TermsOfService,
    PageNotFound,
    ContactUs,
    ProductNotFound,
    Footer,
    Admin,
    ProductManagement,
    CartManagement,
    Login,
    AddNewProduct,
} from "./components";

function App() {
    return (
        <div className="app-container">
            <ProductsContextProvider>
                <CartContextProvider>
                    <CartManagementProvider>
                        <AuthContextProvider>
                            <header>
                                <Navbar />
                            </header>
                            <main>
                                <Routes>
                                    <Route
                                        path="/products"
                                        element={<ProductsList />}
                                    />
                                    <Route
                                        path="/products/:productId"
                                        element={<SingleProduct />}
                                    />

                                    <Route
                                        path="/cart-empty"
                                        element={<CartViewEmpty />}
                                    />
                                    <Route
                                        path="/cart-full"
                                        element={<CartViewFull />}
                                    />

                                    <Route
                                        path="/privacy-policy"
                                        element={<PrivacyPolicy />}
                                    />
                                    <Route
                                        path="/terms-of-service"
                                        element={<TermsOfService />}
                                    />
                                    <Route
                                        path="/contact-us"
                                        element={<ContactUs />}
                                    />

                                    <Route path="/" element={<HomeView />} />

                                    <Route path="/login" element={<Login />} />

                                    <Route
                                        path="/admin"
                                        element={
                                            <PrivateRoute
                                                isAuthenticated={
                                                    isAuthenticated
                                                }
                                            >
                                                <Admin />
                                            </PrivateRoute>
                                        }
                                    />
                                    <Route
                                        path="/product-management"
                                        element={
                                            <PrivateRoute
                                                isAuthenticated={
                                                    isAuthenticated
                                                }
                                            >
                                                <ProductManagement />
                                            </PrivateRoute>
                                        }
                                    />
                                    <Route
                                        path="/cart-management"
                                        element={
                                            <PrivateRoute
                                                isAuthenticated={
                                                    isAuthenticated
                                                }
                                            >
                                                <CartManagement />
                                            </PrivateRoute>
                                        }
                                    />
                                    <Route
                                        path="/add-new-product"
                                        element={
                                            <PrivateRoute
                                                isAuthenticated={
                                                    isAuthenticated
                                                }
                                            >
                                                <AddNewProduct />
                                            </PrivateRoute>
                                        }
                                    />

                                    <Route
                                        path="/product-not-found"
                                        element={<ProductNotFound />}
                                    />
                                    <Route
                                        path="*"
                                        element={<PageNotFound />}
                                    />
                                </Routes>
                            </main>
                            <footer>
                                <Footer />
                            </footer>
                        </AuthContextProvider>
                    </CartManagementProvider>
                </CartContextProvider>
            </ProductsContextProvider>
        </div>
    );
}

export default App;
