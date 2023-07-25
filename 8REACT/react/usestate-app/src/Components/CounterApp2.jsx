import React, {useState} from "react"

function CounterApp2(){
    const [counter, setCounter] = useState(0);

    const incrementar= () =>{
        setCounter(counter+1);
    }

    const decrementar = ()=>{
        setCounter(counter-1);
    }

    const reiniciar = ()=>{
        setCounter(0)
    }

    return(
        <div>
            <button 
                onClick={incrementar}>
                Incrementar
            </button>

            <button 
                onClick={decrementar}>
                Decrementar
            </button>

            <button 
                onClick={reiniciar}>
                Reiniciar
            </button>
            <h1>clicks: {counter}</h1>
        </div>
        )
}

export default CounterApp2
