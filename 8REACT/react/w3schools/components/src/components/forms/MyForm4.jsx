import React, {useState} from "react"

function MyForm4(){
    const [inputs, setInputs] = useState({}); 

    const handleChange = (event) => {
        const name =  event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values,[name]: value}))
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(inputs);
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Enter your name: 
                <input
                    type="text"
                    name="username"
                    value={inputs.username || ""}
                    onChange={handleChange}
                />
            </label>
            <label>
                Enter your age:
                <input
                    type="number"
                    name="age"
                    value={inputs.age || ""}
                    onChange={handleChange}
                />
                
            </label>
            <input
                type="submit"
                value="submit"
            />
        </form>
        )
}

export default MyForm4
