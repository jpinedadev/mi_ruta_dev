import { useState, useEffect } from "react";

const Prueba = () => {
  const [likes, setLikes] = useState(0) 
  
  const darLike =()=>{
    setLikes(likes+1);
  };
  const quitarLike=()=>{
    setLikes(likes-1)
  }
  useEffect(darLike,[]);
   
  return (
    <div>
      <h1>Likes {likes}</h1>
      <button onClick={darLike}>Me Gusta</button>
      <button onClick={quitarLike}>No me gusta</button>
    </div>
  )
}

export default Prueba
