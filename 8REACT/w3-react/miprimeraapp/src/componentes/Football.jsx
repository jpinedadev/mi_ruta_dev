import React from "react"

function Football(){
    
    const shoot = (a) =>{
        alert(a);
    }

    return(
        <div>
            <button onClick={()=> shoot("Goal!")}>Take a shot!</button>  
        </div>
        );
}

export default Football
