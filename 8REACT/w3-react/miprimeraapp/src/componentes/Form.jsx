import React, {useState} from "react"
import pfp1 from '../imagenes/pfp1.jpg'
import '../estilos/Form.css'

function Form(){
    
    const [name,setName] = useState("")
    const [lastName,setLastName] = useState("")
    const [age,setAge] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(`Nombre: ${name}  Apellido: ${lastName} Edad: ${age}`)
    }

    return(
        <div>
            <img src={pfp1}></img><br/><br/>
            <p>Formulario</p><br/><br/>
            <form onSubmit={handleSubmit}>
                <label>Nombre: </label>
                <input 
                    type="text" 
                    value={name}
                    onChange = {(e)=> setName(e.target.value)}
                ></input><br/><br/>
                <label>Apellido:</label>
                <input 
                    type="text" 
                    value={lastName}
                    onChange = {(e)=> setLastName(e.target.value)}
                ></input><br/><br/>
                <label>Edad:</label>
                <input 
                    type="number" 
                    value={age}
                    onChange = {(e)=> setAge(e.target.value)}
                ></input><br/><br/>
                <input type="submit"></input>
            </form>
        </div>
        )
}

export default Form
