import React from 'react'
import './PokeShow.css'

function PokeShow(){
    return (
        <div className="pokeShowContainer">
            <div 
                className="pokeName">
                506 Lillipup
            </div>
            <div
                className="pokeType">
                Type(s) :  Normal
            </div>
            <div
                className="pokeWT">
                WT : 41
            </div>
            <div
                className="pokeHT">
                HT : 4
            </div>
            <div
                className="pokeHP">
                HP : 45
            </div>
            <div
                className="pokeATK">
                ATK : 60
            </div>
            <div
                className="pokeDEF">
                DEF : 45
            </div>
            <div
                className="pokeSPD">
                SPD : 55
            </div>
            <div
                className="pokeSATK">
                SpecATK : 25
            </div>
            <div
                className="pokeSDEF">
                SpecDEF : 45
            </div>
            <img 
                className="pokeImg" 
                src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/506.png'>
            </img>
        </div>
    )
}

export default PokeShow