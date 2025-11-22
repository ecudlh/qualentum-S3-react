import { createContext, useState } from 'react';

export const cartContext = createContext();

export const CartProvider = (props) => {
    const [countProducts, setcountProducts] = useState(0);
    const cartState = {
        countProducts,
        setcountProducts
    };

    return (
        <cartContext.Provider value={cartState}>
            {props.children}
        </cartContext.Provider>
    );
}