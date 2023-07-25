import {get} from "../data/httpClient.jsx"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import getMovieImg from "../utils/getMovieImg.jsx" 

const MovieDetails = () => {
  const {movieId} = useParams()
  const [movie,setMovie] = useState([])

  useEffect(()=>{
    get("/movie/"+movieId).then((data)=>{
      setMovie(data)
    })
  },[movieId])
  const imageUrl = getMovieImg(movie.poster_path,500)

  return (
    <div>
      <img src={imageUrl}
      />
    </div>
  )
}

export default MovieDetails
