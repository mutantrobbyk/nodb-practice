import React, { Component } from 'react'
import Pokemon from './Pokemon'

export default class Pokedex extends Component {
    render() {
        return (
            <div>
                <h2>Pokedex</h2>
                <div className='pokemon-list'>
                {this.props.pokemonArray.map(pokemon => (
                    <Pokemon 
                    key={pokemon.id} 
                    pokemonData={pokemon}
                    releaseFn={this.props.releaseFn}/>
                ))}
                </div>
            </div>
        )
    }
}