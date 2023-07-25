import React, {useState} from "react"

function FavoriteColor(){
    const [color,setColor] = useState("red");
    return(
        <div>
            <h2>My favorite color is  {color}</h2>
            <button
                type="button"
                onClick={()=>setColor("blue")}>
                blue
            </button>
        </div>
        )
}

export default FavoriteColor
