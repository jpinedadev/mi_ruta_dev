import "../components/MovieCard.css"
import {Link} from "react-router-dom"

const MovieCard = ({movie}) => {
  const imageUrl = "https://image.tmdb.org/t/p/w300"+movie.poster_path;

  return (
    <li className="movieCard">
      <Link to={"/movies/"+movie.id}>
      <img 
        width={230} 
        height={345}
        src={imageUrl}
        alt={movie.title}
        className="movieImage"
      />
      <div>{movie.title}</div>
      </Link>
    </li>
  )
}

export default MovieCard
