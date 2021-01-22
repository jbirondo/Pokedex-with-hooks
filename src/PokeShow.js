import React from 'react'
import './PokeShow.css'

function PokeShow(){
    return (
        <div className="pokeShowContainer">
            <div 
                className="pokeName">
            </div>
            <img 
                className="pokeImg" 
                src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/506.png'>
            </img>
        </div>
    )
}

export default PokeShow