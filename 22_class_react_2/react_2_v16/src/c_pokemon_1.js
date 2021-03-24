
import { useEffect, useState } from 'react'



// now let's make a Pokemon component 
function Pokemon1() {

    const [pokemonState, setPokemon] = useState()

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur')
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setPokemon(data)
            })
    }, [])

    if (!pokemonState) {
        return <h1>Loading... </h1>
    }

    return (
        <>
            <h1>: : pokemon 1 : : </h1>
            <p>name: {pokemonState.name}</p>
            <p>base exp: {pokemonState.base_experience}</p>
            <img
                src={pokemonState.sprites.front_shiny}
                alt={`${pokemonState.name} sprite`}
            />
        </>
    )
}


export default Pokemon1;