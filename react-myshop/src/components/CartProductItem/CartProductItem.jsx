import './CartProductItem.css';

function CartProductItem({item}) {
    const totalPrice = item.quantity * item.price;

    return(
        <li className="cart-list-item">
            <div className="img-container">
                <img src={item.image} alt={item.title} className="cart-list-item__img" />
                <div className="header__icon-number-cart">{item.quantity}</div>
            </div>
            <div className="cart-list-item__content">
                <h4 className="cart-list-item__title">{item.title}</h4>
                <p className="cart-list-item__price">Precio por unidad: ${item.price}</p>
                <div className="cart-list-item__price">Precio total: ${totalPrice}</div>
            </div>
        </li>
    );
}

export default CartProductItem;