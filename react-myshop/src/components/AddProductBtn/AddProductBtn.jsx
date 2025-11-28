import './AddProductBtn.css';
import { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';

export default function AddProductButton() {
    const { openAddModal } = useContext(ProductContext);

    return (
        <button className="add-product-btn" onClick={openAddModal}>Agregar producto</button>
    );
}
