import Card from '../Card/Card';
import './CardList.css';

import { useOutletContext } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from '../../context/ProductContext';

function CardList() {
    const { searchBar } = useOutletContext();
    const { products } = useContext(ProductContext);
    const filteredProducts = products.filter((product) => product.title.toLowerCase().includes(searchBar.toLowerCase()))
    return (
        <>         
            {filteredProducts.length > 0 ? (
                <div className="card-list">
                    {filteredProducts.map(product => (
                        <Card
                            key={product.id}
                            item={product}
                        />
                    ))}
                </div>
            ) : (<p className="no-results-container">No se encontraron productos con ese texto de búsqueda</p>)}
        </>
    );
}

export default CardList;
