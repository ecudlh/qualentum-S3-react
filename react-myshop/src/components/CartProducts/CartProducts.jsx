import './CartProducts.css';
import CartProductItem from '../CartProductItem/CartProductItem';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

function CartProducts() {
    const {cart, total, resetCart, buyBtn} = useContext(CartContext);
    const numberItemsCart = cart.length

    return(
        <div className="cart-list-container">
            <h2>Carrito de compras</h2>
            {numberItemsCart > 0 ? (
                <>
                    <ul className="cart-list">
                        {cart.map(product => (
                            <CartProductItem 
                                key={product.id}
                                item={product}
                            />
                        ))}
                    </ul>
                    <div className="cart-total">Total a pagar: ${total}</div>
                </>
            ) : (
                <div className="cart-empty">
                    <p>El carrito está vacío</p>
                </div>
            )}
            <div className="cart-btn-container">
                <button className="cart-btn cart-btn-buy" onClick={buyBtn}>Hacer pedido</button>
                <button className="cart-btn cart-btn-reset" onClick={resetCart}>Resetear carrito</button>
            </div>
        </div>
    );
}

export default CartProducts;