import './Card.css'

function Card ({item}) {
    const {id, title, description, price, image} = item;
    
    return (
        <div className="card-item" key={id}>
            <img src={image} alt={title} className="card-item__img" />
            <div className="card-item__content">
                <h4 className="card-item__title">{title}</h4>
                <p className="card-item__description">{description}</p>
                <div className="card-item__price">${price}</div>
            </div>
        </div>
    );
}

export default Card;