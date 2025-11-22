import './Card.css'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

function Card ({item}) {
    const {id, title, description, price, image} = item;
    const {addToCart} = useContext(CartContext);
    
    return (
        <div className="card-item" key={id}>
            <img src={image} alt={title} className="card-item__img" />
            <div className="card-item__content">
                <h4 className="card-item__title">{title}</h4>
                <p className="card-item__description">{description}</p>
                <div className="card-item__price">${price}</div>
            </div>
            <button className="card-item__btn" onClick={() => addToCart(item)}>Agregar al carrito</button>
        </div>
    );
}

export default Card;