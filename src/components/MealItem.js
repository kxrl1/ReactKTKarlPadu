const MealItem = (props) => {
    return (
        <li className="meal-item">
            <article>
                <img src={`http://localhost:3001/${props.image}`} alt={props.name} />
                <div>
                    <h3>{props.name}</h3>
                    <p className="meal-item-price">{new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(props.price)}</p>
                    <p className="meal-item-description">{props.description}</p>
                </div>
                <p className="meal-item-actions">
                    <button className="button">Add to Cart</button>
                </p>
            </article>
        </li>
    )
}

export default MealItem