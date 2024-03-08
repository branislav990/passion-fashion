import { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import instance from "../../utils/api";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../loading/Loading";
import SingleProductInfo from "./SingleProductInfo";
import Footer from "../views/Footer";
import Error from "../error/Error";

const SingleProduct = () => {
    const [product, setProduct] = useState();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();
    const { productId } = useParams();

    useEffect(() => {
        const parsedProductId = parseInt(productId);
        if (
            isNaN(parsedProductId) ||
            parsedProductId < 1 ||
            (parsedProductId > 8 && parsedProductId < 15) ||
            parsedProductId > 20
        )
            navigate("/product-not-found");
        instance
            .get(`/products/${productId}`)
            .then((res) => setProduct(res.data))
            .catch(() => setError(true))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div>
            <Navbar />
            {loading ? (
                <Loading />
            ) : error ? (
                <Error />
            ) : (
                <div className="single-product-wrapper">
                    <img
                        className="single-img"
                        src={product.image}
                        height={500}
                    />
                    <SingleProductInfo product={product} />
                </div>
            )}
            <Footer />
        </div>
    );
};

export default SingleProduct;
