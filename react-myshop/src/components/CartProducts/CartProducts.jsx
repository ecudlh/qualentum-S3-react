import './CartProducts.css';
import CartProductItem from '../CartProductItem/CartProductItem';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

function CartProducts() {
    const {cart} = useContext(CartContext);
    const numberItemsCart = cart.length

    return(
        <div className="cart-list-container">
            <h2>Carrito de compras</h2>
            {numberItemsCart > 0 ? (
                <ul className="cart-list">
                    {cart.map(product => (
                        <CartProductItem 
                            key={product.id}
                            item={product}
                        />
                    ))}
                </ul>
            ) : (
                <div className="cart-empty">
                    <p>El carrito está vacío</p>
                </div>
            )}
        </div>
    );
}

export default CartProducts;