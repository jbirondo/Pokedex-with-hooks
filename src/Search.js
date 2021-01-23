import React, { useState }from 'react'
import './Search.css'

function Search(){
    const [searchValue, handleSearchValue] = useState("")
    return (
        <input 
            onChange={e => {
                console.log(e.target.value)
                handleSearchValue(e.target.value)
            }}
            className="searchBar" 
            type="text" 
            placeholder="Type a name or a pokemon number"
            value={searchValue}
        />
    )
}

export default Search