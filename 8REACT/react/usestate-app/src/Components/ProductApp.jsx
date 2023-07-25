import React, {useState} from "react"

const initialProduct={
    title: "titulo",
    description: "Descripcion"
}

function ProductApp(){
    const [product, setProduct] = useState(initialProduct);

    const updateProduct=()=>{
        setProduct({
            ...product,
            title:"otro titulo",
            description:"value"
        })
    }
    return(
        <div>
            <button
                onClick={updateProduct}>
                Update
            </button>
            <h1>{product.title}</h1>
            <h1>{product.description}</h1>
        </div>
        )
}

export default ProductApp
