import React, {useState} from "react"

const initialCart = [
    {id:1, title:'Product', description:'Desc'},
    {id:2, title:'Product 2', description:'Desc 2'},
]

function ShoppingCart2(){
    const [cart,setCart] = useState(initialCart);

    const deleteProduct=(productId)=>{
        const changedCart=cart.filter(product=> product.id !== productId)
        setCart(changedCart)
    }

    const updateProduct=(editProduct)=>{
        const changedCart=cart.map(product=>(
            product.id === editProduct.id 
            ? editProduct
            : product
        ))
        setCart(changedCart)
    }

    const addProduct=(newProduct)=>{
        newProduct.id =  Date.now();
        const changedCart = [
            newProduct,
            ...cart,
        ]
        setCart(changedCart)
    }
    return(
        <div>
            <button
                onClick={()=> addProduct({title:'nuevo titulo', description:'nueva Desc'})}
            >Add</button>
            {
                cart.map(product=>(
                    <div key={product.id}>
                        <h1>{product.id} 
                        {product.title}</h1>
                        <p>{product.description}</p>
                        
                        <button
                        onClick={()=> deleteProduct(product.id)}
                        >Delete</button>

                        <button
                            onClick={()=>updateProduct({id: product.id, title: 'Edit titulo', description:'Edit Desc'})}
                        >Update</button>
                    </div>
                ))
            } 
        </div>
        )
}

export default ShoppingCart2
