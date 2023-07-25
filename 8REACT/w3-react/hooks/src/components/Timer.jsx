import React, {useState,useEffect} from "react"

function Timer(){
    const [count,setCount] = useState(0);

    useEffect(() => {
        setTimeout(()=>{
            setCount((count)=> count+1);
        }, 1000);
    },[]);

    return(
        <div>
            <h1>I've render {count} times!</h1>
        </div>
        )
}

export default Timer
