import { createContext, useState, useEffect } from 'react';
import data from "../fakeapi/data.json";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [productToEdit, setProductToEdit] = useState(null);

    useEffect(() => {
        setProducts(data);
    }, []);

    const deleteProduct = (id) => {
        setProducts(prev => prev.filter(p => p.id !== id));
    };

    const openEditModal = (product) => {
        setProductToEdit(product);  
    };

    const closeEditModal = () => {
        setProductToEdit(null);
    };

    const saveProduct = (updatedProduct) => {
        setProducts(prev =>
            prev.map(p => p.id === updatedProduct.id ? updatedProduct : p)
        );
        setProductToEdit(null);
    };

    const addProduct = () => {
        console.log('agregar')
    };

    return (
        <ProductContext.Provider value={{ products, deleteProduct, openEditModal, closeEditModal, saveProduct, productToEdit, addProduct }}>
            {children}
        </ProductContext.Provider>
    );
}