import './ProductDetail.css';

import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { useParams, useNavigate } from "react-router-dom";
import { ProductContext } from '../../context/ProductContext';

function ProductDetail() {
    const {addToCart} = useContext(CartContext);
    const { id } = useParams();
    const navigate = useNavigate();
    const { products } = useContext(ProductContext);
    const product = products.find(p => p.id === parseInt(id));

    return(
        <div className="product-detail-container">
            <img src={product.image} alt={product.title} className="product-detail__img" />
            <div className="product-detail__content">
                <button className="product-detail-back" onClick={() => navigate("/")}>Volver a productos</button>
                <h4 className="product-detail__title">{product.title}</h4>
                <p className="product-detail__price">{product.price}</p>
                <p className="product-detail__description">{product.description}</p>
                <button className="product-detail-btn" onClick={() => addToCart(product)}>Añadir a la cesta</button>
            </div>
        </div>
    );
};

export default ProductDetail;