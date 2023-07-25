import React, {useState} from "react"

const initialProduct={
    title:"Producto",
    description:"Descripcion"
}

function ProductApp2(){
    const [producto, setProducto] = useState(initialProduct);
    const actualizarProducto=()=>{
        setProducto({
            ...producto,
            title:"Titulo nuevo",
            description:"nueva Desc"
        })
    }

    return(
        <div>
            <button
            onClick={actualizarProducto}>
                Actualizar producto
            </button>
            <div>
                <h1>{producto.title}</h1>
                <h1>{producto.description}</h1>
            </div>
        </div>
        )
}

export default ProductApp2
