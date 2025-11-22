import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState(() => {
        const saved = localStorage.getItem("cart");
        return saved ? JSON.parse(saved) : [];
    });

    const [countProducts, setcountProducts] = useState(() => {
        const saved = localStorage.getItem("cart");
        if (saved) {
            return JSON.parse(saved).reduce((acc, item) => acc + item.quantity, 0);
        }
        return 0;
    });

    const [total, setTotal] = useState(() => {
        const saved = localStorage.getItem("cart");
        if (saved) {
            return JSON.parse(saved)
                .reduce((acc, item) => acc + item.price * item.quantity, 0)
                .toFixed(2);
        }
        return 0;
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);
    
    // Add to cart 
    const addToCart = (product) => {
        setCart((prevCart) => {
            const existing = prevCart.find((item) => item.id === product.id);

            let newCart;
            if (existing) {
                newCart = prevCart.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
            } else {
                newCart = [...prevCart, { ...product, quantity: 1 }];
            }

            const newTotal = newCart
                .reduce((acc, item) => acc + item.price * item.quantity, 0)
                .toFixed(2);

            setTotal(parseFloat(newTotal));
            setcountProducts(newCart.reduce((acc, item) => acc + item.quantity, 0));

            return newCart;
        });
    };    

    return (
        <CartContext.Provider value={{ cart, countProducts, total, addToCart }}>
            {children}
        </CartContext.Provider>
    );
}