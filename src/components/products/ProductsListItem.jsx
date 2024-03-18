import { Link } from "react-router-dom";
import CartGrid from "./CartGrid";

const ProductsListItem = ({ product }) => {
    return (
        <Link className="product-list-item-link" to={`/products/${product.id}`}>
            <div className="products-list-item">
                <div className="img-wrapper">
                    <img className="products-item-img" src={product.image} />
                </div>
                <div className="product-info-wrapper">
                    <h3 className="product-title">{product.title}</h3>
                    <div className="cart-price">
                        <CartGrid product={product} />
                        <h4 className="product-price">
                            &pound;{product.price}
                        </h4>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductsListItem;
