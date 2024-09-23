import { useEffect, useState } from "react";


const usePokeAPI = (count) => {
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const listResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${count}`);
                const listData = await listResponse.json();

                const pokemonDetails = await Promise.all(
                    listData.results.map(async (pokemon) => {
                        const detailResponse = await fetch(pokemon.url);
                        return detailResponse.json();
                    })
                );

                const processedPokemon = pokemonDetails.map(poke => ({
                    id: poke.id,
                    name: poke.name,
                    image: poke.sprites.front_default,
                    types: poke.types.map(type => type.type.name)
                }));

                setPokemon(processedPokemon);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching Pokemon data:', err);
                setError('Failed to fetch Pokemon data');
                setLoading(false);
            }
        };

        fetchPokemon();
    }, [count]);

    return { pokemon, loading, error };
};

export default usePokeAPI;