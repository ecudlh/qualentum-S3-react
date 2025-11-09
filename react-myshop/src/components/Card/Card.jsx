import './Card.css'

function Card ({key, title, description, price, img}) {
    return (
        <div className="card-item" id={key}>
            <img src={img} alt={title} className="card-item__img" />
            <div className="card-item__content">
                <h4 className="card-item__title">{title}</h4>
                <p className="card-item__description">{description}</p>
                <div className="card-item__price">${price}</div>
            </div>
        </div>
    );
}

export default Card;