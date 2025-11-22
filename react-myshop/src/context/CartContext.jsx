import { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [countProducts, setcountProducts] = useState(0);
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    
    // Add to cart 
    const addToCart = (product) => {
        setCart(prevCart => {
            // Comprobar si ya existe
            const existingProduct = prevCart.find(item => item.id === product.id);

            let newCart;
            if (existingProduct) {
                newCart = prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                newCart = [...prevCart, { ...product, quantity: 1 }];
            }

            const newTotal = newCart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
            setTotal(parseFloat(newTotal));

            return newCart;
        });

        setcountProducts(prev => prev + 1);
    };
    
    const cartState = { cart, countProducts, addToCart, total };

    return (
        <CartContext.Provider value={cartState}>
            {children}
        </CartContext.Provider>
    );
}