import { Link } from "react-router-dom";

const ProductsListItem = ({ product }) => {
    return (
        <Link className="product-list-item-link" to={`/products/${product.id}`}>
            <div className="products-list-item">
                <img className="products-item-img" src={product.image} />
                <div className="product-info-wrapper">
                    <h3 className="product-title">{product.title}</h3>
                    <h4 className="product-price">&pound;{product.price}</h4>
                </div>
            </div>
        </Link>
    );
};

export default ProductsListItem;
