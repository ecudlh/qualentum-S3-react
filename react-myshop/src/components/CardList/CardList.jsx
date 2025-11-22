import Card from '../Card/Card';
import './CardList.css';
import data from "../../fakeapi/data.json";

import { useOutletContext } from "react-router-dom";

function CardList() {
    const { searchBar } = useOutletContext();
    const filteredProducts = data.filter((product) => product.title.toLowerCase().includes(searchBar.toLowerCase()))
    
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
