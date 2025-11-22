import { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [countProducts, setcountProducts] = useState(0);
    const [cart, setCart] = useState([]);
    
    // Add to cart 
    const addToCart = (product) => {
        setCart(prevCart => {
            // Comprobar si ya existe
            const existingProduct = prevCart.find(item => item.id === product.id);

            if (existingProduct) {
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [...prevCart, { ...product, quantity: 1 }];
        });

        setcountProducts(prev => prev + 1);
    };
    
    const cartState = { cart, countProducts, addToCart };

    return (
        <CartContext.Provider value={cartState}>
            {children}
        </CartContext.Provider>
    );
}