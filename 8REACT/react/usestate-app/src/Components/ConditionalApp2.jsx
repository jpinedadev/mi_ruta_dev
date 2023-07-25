import React, {useState} from "react"

function ConditionalApp2(){
    const [cambiar, setCambiar] =  useState(true);
    return(
        <div>
            <button onClick={()=> setCambiar(!cambiar)}>
                Cambiar
            </button>
            {
                cambiar 
                    ? <h1>Hola verdadero</h1>
                    : <h1>Hola falso</h1>
            }
                    <h1>Estado: {cambiar.toString()}</h1>
        </div>
        )
}

export default ConditionalApp2
