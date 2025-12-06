import { createContext, useState, useEffect } from 'react';
import { api } from '../api';

export const ProductContext = createContext();

export function ProductProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [productToEdit, setProductToEdit] = useState(null);
    const [addingProduct, setAddingProduct] = useState(false);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const API_URL = "https://fakestoreapi.com/products";

    const buildProductBody = (product) => ({
        title: product.title,
        price: parseFloat(product.price),
        description: product.description,
        image: product.imageUrl || "https://via.placeholder.com/150",
        category: product.category || "general"
    });

    useEffect(() => {
        let mounted = true;

        async function  fetchProducts() {
            try {
                setLoading(true);
                setError(null);
                const { data } = await api.get("/products");

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
            const { data } = await api.delete(`/products/${id}`);
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
            // Construir el body para la API y PUT a la api
            const body = buildProductBody(updatedProduct);
            const { data } = await api.put(`/products/${updatedProduct.id}`, body);

            // Actualizar el estado local para que la UI se vea reflejada
            setProducts(prev =>
                prev.map(p => p.id === data.id ? data : p)
            );

            // Cerrar la modal
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

            // Construir el body para la API y POST a la api
            const body = buildProductBody(newProduct);
            const { data } = await api.post("/products", body);
            setProducts(prev => [...prev, data]);

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