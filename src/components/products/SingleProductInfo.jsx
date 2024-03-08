import starIcon from "../../assets/star.png";
import AddToCart from "./AddToCart";
import "./singleProductInfo.css";

const SingleProductInfo = ({ product }) => {
    return (
        <div className="single-product-info">
            <h1 className="single-product-title">{product.title}</h1>
            <p className="single-product-description">{product.description}</p>

            <div className="rating-price">
                <div className="rating-wrapper">
                    <div className="star">
                        <img src={starIcon} width={50} />
                    </div>
                    <h3 className="qty-rating-wrapper">
                        <span className="product-rating">
                            {product.rating.rate}
                        </span>
                        <span className="from-five">
                            /5
                            <br />
                            {product.rating.count} ratings
                        </span>
                    </h3>
                </div>

                <h2 className="single-price">
                    <span>&pound;{product.price}</span>
                </h2>
            </div>

            <AddToCart product={product} />
        </div>
    );
};

export default SingleProductInfo;
