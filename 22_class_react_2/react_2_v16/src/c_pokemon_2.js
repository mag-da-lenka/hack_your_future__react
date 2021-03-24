import { useState, useEffect } from 'react'


function PokemonName({ name }) {
    return <p> name: {name}</p>
}

function PokemonSprite({ src, name }) {
    return <img src={src} alt={`${name} sprite`} />
}


export function Pokemon2() {

    const [pokemonState, setPokemon] = useState()

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
            .then((res) => res.json())
            .then((data) => {
                setPokemon(data)
            })
    }, [])

    if (!pokemonState) {
        return <p>loading..</p>
    }

    return (
        <>
            <h1>: : pokemon 2 : : </h1>
            <PokemonName
                name={pokemonState.name}
            />
            <PokemonSprite
                src={pokemonState.sprites.front_shiny}
                name={pokemonState.name}
            />
        </>
    )
}

export default Pokemon2