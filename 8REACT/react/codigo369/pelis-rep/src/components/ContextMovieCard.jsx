import {useEffect, useState} from "react"
import {get} from "../data/httpClient.jsx"
import MovieCard from "../components/MovieCard.jsx"
import "../components/ContextMovieCard.css"

const ContextMovieCard = () => {
  const [movies, setMovies] = useState([])
   
  useEffect(() => {
    get("/discover/movie").then((data)=>{
      setMovies(data.results)
    })

  }, []);

  return (
    <ul className="container">
      {movies.map((movie)=>(
        <MovieCard key={movie.id} movie={movie}/>
      ))}
    </ul>
  )
}

export default ContextMovieCard
