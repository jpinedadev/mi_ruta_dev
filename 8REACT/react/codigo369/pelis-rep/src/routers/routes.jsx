import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import LandingPage from "../pages/LandingPage.jsx"
import MovieDetails from "../pages/MovieDetails.jsx"

const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/movies/:movieId" element={<MovieDetails/>} />
      </Routes>
    </Router>
  )
}

export default MyRoutes

