
  //tarjeta 
  const anime = [
    {
      id:1,
      nombre:"anime 1",
      imagen:'/src/assets/img2.jpg'
    },
    {
      id:2,
      nombre:"anime 2",
      imagen:'/src/assets/img1.jpg'
    }
  ]

function CardPk() {
  return (
   anime.map((item)=>{
     return(
       <div key={item.id} id={item.id}>
         <h1>Nº {item.id} | {item.nombre}</h1>
         <img src={item.imagen} alt=""/>
       </div>
     )
   })
  )
}

export default CardPk
