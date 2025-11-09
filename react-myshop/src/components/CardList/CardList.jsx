import data from '../../fakeapi/data.json'
import Card from '../Card/Card'
import './CardList.css'

function CardList() {
    return (
        <div className="card-list">
            {data.map(item => (
                <Card
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    img={item.image}
                />
            ))}
        </div>
    );
}

export default CardList;
