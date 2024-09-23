import './index.css'

const Card = ({ id, name, image, types, onClick }) => {
    return (
        <div className="card" onClick={onClick}>
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <div className="types">
                {Array.isArray(types) && types.length > 0 ? (
                    types.map((type, index) => (
                        <span key={index} className={`type ${type}`}>{type}</span>
                    ))
                ) : (
                    <span className="type unknown">Unknown</span>
                )}
            </div>
        </div>
    );
};

export default Card;