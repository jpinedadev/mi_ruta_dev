import React, {useState} from "react"
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

function ProductTable({ products }){
    
    const rows = [];
    let lastCategory =  null;

    products.forEach((product) => {
        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow
                    category={ product.category }
                    key={ product.category }
                />
            );
        }
        rows.push(
            <ProductRow
                product={ product }
                key={ product.name }
            />
        );
        lastCategory = product.category;
    });

    return(
        <table>
            <head>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </head>
        <tbody>
            { rows }
        </tbody>
    </table>
        );
}

export default ProductTable
