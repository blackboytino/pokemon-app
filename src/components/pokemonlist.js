import React from "react";


export default function PokemonList(){
    const [pokeData, setPokedata] = React.useState([])

    React.useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=2000`)
    
            .then(res => res.json())
            .then(data => setPokedata(data.results))
    }, [])

    const pokemonData= pokeData.map( (pokemon, index) => {
        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`
     var name = (pokemon.name).charAt(0).toUpperCase() + (pokemon.name).slice(1)
    
    
        return (
        <div key={pokemon.id} id="pokemon-data-box">
          
    <img src={imageUrl}  alt="pokemon-preview"/>
    {name}
    
    </div>
        )
    
    })

    return(
          <>
{pokeData.length > 0 ? pokemonData : <div>Loading...</div>}
        </>
    )
}