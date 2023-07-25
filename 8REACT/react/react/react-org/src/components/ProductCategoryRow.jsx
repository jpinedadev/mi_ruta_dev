import React, {useState} from "react"

function ProductCategoryRow({ category }){
    return(
            <tr>
                <th>
                    { category }
                </th>
            </tr>
        )
}

export default ProductCategoryRow
