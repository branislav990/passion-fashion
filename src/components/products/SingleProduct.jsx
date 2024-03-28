import { useContext, useEffect, useState } from "react";
import instance from "../../utils/api";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../loading/Loading";
import SingleProductInfo from "./SingleProductInfo";
import Error from "../error/Error";
import "./singleProduct.css";
import { ProductsContext } from "../../contexts/ProductsContext";

const SingleProduct = () => {
    const [product, setProduct] = useState();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    const { products } = useContext(ProductsContext);

    const navigate = useNavigate();
    const { productId } = useParams();

    useEffect(() => {
        const parsedProductId = parseInt(productId);
        if (
            isNaN(parsedProductId) ||
            parsedProductId < 1 ||
            (parsedProductId > 8 && parsedProductId < 15)
            // parsedProductId > 20
        )
            navigate("/product-not-found");

        if (!products.length) {
            instance
                .get(`/products/${productId}`)
                .then((res) => setProduct(res.data))
                .catch(() => setError(true))
                .finally(() => setLoading(false));
        } else {
            setLoading(false);
            const product = products.find(
                (product) => product.id === parsedProductId
            );
            setProduct(product);
        }
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
                    <div className="single-product-wrapper container">
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
