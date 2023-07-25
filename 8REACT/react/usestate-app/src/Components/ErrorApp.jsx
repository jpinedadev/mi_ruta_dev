import React, {useState} from "react"

function ErrorApp(){
    const [error, setError] = useState("");

    return(
        <div>
            <h1>ErrorApp</h1>
            <button
                onClick={()=> setError("Error al traer en la API")}>
                Error
            </button>
            {error && <h1>{error}</h1>}
        </div>
        )
}

export default ErrorApp
