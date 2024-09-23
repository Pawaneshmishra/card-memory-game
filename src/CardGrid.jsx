import Card from './Card'

const CardGrid = ({ pokemon, onCardClick }) => {
    const shuffleArray = (array) => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    const shuffledPokemon = shuffleArray(pokemon);

    return (
        <div className="card-grid">
            {shuffledPokemon.map((poke) => (
                <Card
                    key={poke.id}
                    id={poke.id}
                    name={poke.name}
                    image={poke.image}
                    types={poke.types}
                    onClick={() => onCardClick(poke.id)}
                />
            ))}
        </div>
    );
};

export default CardGrid;