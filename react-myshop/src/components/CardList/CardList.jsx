import Card from '../Card/Card'
import './CardList.css'

function CardList({products, searchBar, setcountProducts, countProducts}) {
    const filteredProducts = products.filter((product) => product.title.toLowerCase().includes(searchBar.toLowerCase()))
    
    return (
        <>         
            {filteredProducts.length > 0 ? (
                <div className="card-list">
                    {filteredProducts.map(product => (
                        <Card
                            key={product.id}
                            item={product}
                            setcountProducts={setcountProducts}
                            countProducts={countProducts}
                        />
                    ))}
                </div>
            ) : (<p className="no-results-container">No se encontraron productos con ese texto de búsqueda</p>)};
        </>
    );
}

export default CardList;
