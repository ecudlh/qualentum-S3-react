import '../EditProductModal/EditProductModal.css';
import { useState, useContext } from "react";
import { ProductContext } from '../../context/ProductContext';

export default function AddProductModal() {
    const { addingProduct, closeAddModal, addProduct } = useContext(ProductContext);

    const [form, setForm] = useState({
        title: "",
        price: "",
        description: "",
        category: "",
        imageUrl: ""
    });

    if (!addingProduct) return null;

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = () => {
        if (!form.title || !form.price) {
            alert("Completa título y precio");
            return;
        }
        addProduct(form);
        setForm({ title: "", price: "", description: "", category: "", imageUrl: "" });
    };

    return (
        <div className="modal-backdrop">
            <div className="modal">
                <h2>Agregar producto</h2>
                <input name="title" placeholder="Título" value={form.title} onChange={handleChange} />
                <input name="price" placeholder="Precio" value={form.price} onChange={handleChange} />
                <textarea name="description" placeholder="Descripción" value={form.description} onChange={handleChange} />
                <input name="category" placeholder="Categoría" value={form.category} onChange={handleChange} />
                <input name="imageUrl" placeholder="URL imagen" value={form.imageUrl} onChange={handleChange} />
                <button className="save-btn" onClick={handleSubmit}>Guardar</button>
                <button className="cancel-btn" onClick={closeAddModal}>Cancelar</button>
            </div>
        </div>
    );
}