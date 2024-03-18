import starIcon from "../../assets/star.png";
import AddToCart from "./AddToCart";
import "./singleProductInfo.css";
import { Rating } from "react-simple-star-rating";

const SingleProductInfo = ({ product }) => {
    return (
        <div className="single-product-info">
            <h1 className="single-product-title">{product.title}</h1>
            <p className="single-product-description">
                <details>
                    <summary>Details</summary>
                    <p className="product-description">
                        <div className="pre">{product.description}</div>
                    </p>
                </details>
            </p>

            <div className="rating-price-wrapper">
                <h2 className="single-price">
                    <span>&pound;{product.price}</span>
                </h2>
                <div className="rating-wrapper">
                    <div className="rating-stars">
                        <Rating
                            initialValue={product.rating.rate}
                            allowFraction
                            readonly
                        />
                    </div>

                    <h4 className="from-five">
                        {product.rating.count} ratings
                    </h4>
                </div>
            </div>
            <AddToCart product={product} />
        </div>
    );
};

export default SingleProductInfo;
