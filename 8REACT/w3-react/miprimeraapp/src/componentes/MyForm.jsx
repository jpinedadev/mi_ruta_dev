import React, { useState } from "react"

function MyForm(){
    const [inputs,setInputs] = useState({});
    const [textarea,setTextarea] = useState(
        "The content of a textarea goes in the value atrribute"
    );
    const [myCar,setMyCar] = useState("Volvo");

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
        setTextarea(event.target.value)
        setMyCar(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs)
    }

    return(
        <form onSubmit = {handleSubmit}>
            <label>Enter your name:
            <input 
                type="text"
                name="username"
                value={inputs.username || ""}
                onChange={handleChange} 
            />
            </label>

            <label>Enter your age:
                <input 
                    type="number"
                    name="age"
                    value={inputs.age || ""}
                    onChange={handleChange}
                />
            </label>
            
            <textarea value={textarea} onChange={handleChange}/>

            <select value={myCar} onChange={handleChange}>
                <option value="Ford">Ford</option>
                <option value="Volvo">Volvo</option>
                <option value="Fiat">Fiat</option>
            </select>
           
            <input type="submit"/>
        </form>
        )
}

export default MyForm
