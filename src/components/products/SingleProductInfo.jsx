import starIcon from "../../assets/star.png";
import AddToCart from "./AddToCart";
import "./singleProductInfo.css";
import { Rating } from "react-simple-star-rating";

const SingleProductInfo = ({ product }) => {
    return (
        <div className="single-product-info">
            <h1 className="single-product-title">{product.title}</h1>
            <div className="single-product-description">
                <details>
                    <summary>Details</summary>
                    <div className="product-description">
                        <p className="pre">{product.description}</p>
                    </div>
                </details>
            </div>

            <div className="rating-price-wrapper">
                <h2 className="single-price">
                    <span>&pound;{product.price}</span>
                </h2>
                <div className="rating-wrapper">
                    <div className="rating-stars">
                        <Rating
                            initialValue={product.rating ? product.rating.rate : 0}
                            allowFraction
                            readonly
                        />
                    </div>

                    <h4 className="from-five">
                        {product.rating ? product.rating.count : 0} ratings
                    </h4>
                </div>
            </div>
            <AddToCart product={product} />
        </div>
    );
};

export default SingleProductInfo;
