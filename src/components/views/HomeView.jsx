import { useEffect, useState } from "react";
import { ReactComponent as ProductArray } from "../../assets/product-array.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import instance from "../../utils/api";
import Loading from "../loading/Loading";
import { Link } from "react-router-dom";
import "./homeView.css";
import Error from "../error/Error";

const HomeView = () => {
    const [mainProduct, setMainProduct] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        instance
            .get("/products/7")
            .then((res) => setMainProduct(res.data))
            .catch(() => setError(true))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="main-page">
            {loading ? (
                <Loading className="loading" />
            ) : error ? (
                <Error />
            ) : (
                <>
                    <Logo className="main-page-logo" />
                    <div className="product-array-wrapper">
                        <Link className="main-page-card bof" to={"products/7"}>
                            <h2 className="best-offer-text">
                                Shine brighter together. <br /> Diamond rings
                                await! <br />
                                <br /> BEST OFFER
                            </h2>
                            <img
                                className="best-offer-img"
                                src={mainProduct.image}
                                alt={mainProduct.title}
                            />
                        </Link>

                        <Link
                            className="main-page-card product-array bof"
                            to={"/products"}
                        >
                            <h2 className="best-offer-text">
                                EXPLORE OUR STYLISH FASHION COLLECTION
                            </h2>
                            <ProductArray className="product-array" />
                        </Link>
                    </div>
                </>
            )}
        </div>
    );
};

export default HomeView;
