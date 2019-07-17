import React from 'react'

const Pokemon = (props, releaseFn) => {
    return (
        <div>
            {props.pokemonData.name}
            <img 
            onClick={() => releaseFn(props.pokemonData.id)}
            src={props.pokemonData.img} alt=""/>
        </div>
    )
}

export default Pokemon