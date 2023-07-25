import React, {useState} from "react"

function ErrorApp2(){
    const [error, setError] = useState("");

    return(
        <div>
            <button onClick={()=> setError("error en la aplicacion")}>
                Error
            </button>
            {
                error && <h1>{error}</h1>
            }
        </div>
        )
}

export default ErrorApp2
