import React, {useState} from "react"
import ProductTable from "./ProductTable"
import SearchBar from "./SearchBar"

function FilterableProductTable( { products } ){
    return(
        <div>
            <SearchBar/>
            <ProductTable products={ products } />
        </div>
        )
}

export default FilterableProductTable
