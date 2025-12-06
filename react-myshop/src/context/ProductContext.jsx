import { createContext, useState, useEffect } from 'react';

export const ProductContext = createContext();

export function ProductProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [productToEdit, setProductToEdit] = useState(null);
    const [addingProduct, setAddingProduct] = useState(false);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const API_URL = "https://fakestoreapi.com/products";

    useEffect(() => {
        let mounted = true;

        async function  fetchProducts() {
            try {
                setLoading(true);
                setError(null);

                const res = await fetch(API_URL);
                if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);

                const data = await res.json();

                if (mounted) {
                    setProducts(data);
                }
            } catch(err) {
                console.error("fetchProducts:", err);
                if (mounted) {
                    setError("No se pudieron cargar los productos");
                }
            } finally {
                if (mounted) setLoading(false);
            }
        }

        fetchProducts();

        return () => {
            mounted = false; 
        };

    }, []);

    // Delete product
    const deleteProduct = async (id) => {
        try {
            const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
            method: "DELETE",
            });

            if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);

            const data = await res.json();
            console.log("Producto eliminado:", data);

            // Actualizamos el estado local para que la UI se vea reflejada
            setProducts(prev => prev.filter(p => p.id !== id));
        } catch (err) {
            console.error("deleteProduct:", err);
            alert("No se pudo eliminar el producto. Revisa la consola.");
        }
    };

    const openEditModal = (product) => {
        setProductToEdit(product);  
    };

    const closeEditModal = () => {
        setProductToEdit(null);
    };

    // Save product
    const saveProduct = async (updatedProduct) => {
        try {
            // Construir el body para la API
            const body = {
                title: updatedProduct.title,
                price: parseFloat(updatedProduct.price),
                description: updatedProduct.description,
                image: updatedProduct.imageUrl || "https://via.placeholder.com/150",
                category: updatedProduct.category || "general"
            };

            const res = await fetch(`https://fakestoreapi.com/products/${updatedProduct.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });

            if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);

            const data = await res.json();

            // Actualizamos el estado local para que la UI se vea reflejada
            setProducts(prev =>
                prev.map(p => p.id === data.id ? data : p)
            );

            // Cerramos la modal
            setProductToEdit(null);
        } catch (err) {
            console.error("saveProduct:", err);
            alert("No se pudo guardar el producto. Revisa la consola.");
        }
    };

    const openAddModal = () => {
        setAddingProduct(true);
    };

    const closeAddModal = () => {
        setAddingProduct(false);
    };

    // Add product
    const addProduct = async (newProduct) => {
        try {
            setAddingProduct(true);

            const body = {
                title: newProduct.title,
                price: parseFloat(newProduct.price),
                description: newProduct.description,
                image: newProduct.imageUrl || "https://via.placeholder.com/150",
                category: newProduct.category || "general"
            };

            // POST a la API
            const res = await fetch("https://fakestoreapi.com/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            });

            if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);

            const createdProduct = await res.json(); // objeto devuelto por la API, incluye ID

            setProducts(prev => [...prev, createdProduct]);

            // Cerrar la modal
            setAddingProduct(false);
        } catch (err) {
            console.error("addProduct:", err);
            alert("No se pudo agregar el producto. Revisa la consola para más detalles.");
            setAddingProduct(false);
        }
    };

    return (
        <ProductContext.Provider 
            value={{ 
                products, 
                deleteProduct, 
                openEditModal, 
                closeEditModal, 
                saveProduct, 
                productToEdit, 
                openAddModal, 
                closeAddModal, 
                addProduct, 
                addingProduct,
                loading,
                error 
            }}>
            {children}
        </ProductContext.Provider>
    );
}