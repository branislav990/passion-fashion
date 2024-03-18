import { useEffect, useState } from "react";
import instance from "../../utils/api";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../loading/Loading";
import SingleProductInfo from "./SingleProductInfo";
import Error from "../error/Error";
import "./singleProduct.css";

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
            {loading ? (
                <Loading />
            ) : error ? (
                <div className="error">
                    <Error />
                </div>
            ) : (
                <>
                    <div className="single-product-wrapper">
                        <div className="single-product-img-wrapper">
                            <img
                                className="single-img"
                                src={product.image}
                                height={500}
                            />
                        </div>

                        <SingleProductInfo product={product} />
                    </div>
                </>
            )}
        </div>
    );
};

export default SingleProduct;
