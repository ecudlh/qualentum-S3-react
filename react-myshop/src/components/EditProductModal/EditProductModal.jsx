import './EditProductModal.css';
import { useState, useContext, useEffect } from "react";
import { ProductContext } from '../../context/ProductContext';

export default function EditProductModal() {
    const { productToEdit, closeEditModal, saveProduct } = useContext(ProductContext);

    const [form, setForm] = useState(null);

    useEffect(() => {
        if (productToEdit) {
            setForm(productToEdit); 
        }
    }, [productToEdit]);

    if (!productToEdit) return null; 

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = () => {
        saveProduct(form);
    };

    return (
        <div className="modal-backdrop">
            <div className="modal">
                <h2>Editar producto</h2>

                <input
                    name="title"
                    value={form?.title || ""}
                    onChange={handleChange}
                />

                <input
                    name="price"
                    value={form?.price || ""}
                    onChange={handleChange}
                />

                <textarea
                    name="description"
                    value={form?.description || ""}
                    onChange={handleChange}
                />

                <button className="modal-btn save-btn" onClick={handleSubmit}>Guardar cambios</button>
                <button className="modal-btn cancel-btn" onClick={closeEditModal}>Cancelar</button>
            </div>
        </div>
    );
}
