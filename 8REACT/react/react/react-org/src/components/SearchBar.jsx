import React, {useState} from "react"

function SearchBar(){
    return(
        <form>
            <input type="text" placeholder="search ..." />
            <label>
                <input type="checkbox" />
                {' '}
                Only show products in stock
            </label>
        </form>
        )
}

export default SearchBar
