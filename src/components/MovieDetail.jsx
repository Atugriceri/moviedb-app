import React, { useState, useEffect } from 'react'
import {Link, useParams} from "react-router-dom"
import { ModeContext } from "../context/ModeContext";
import ModeAPIButton from "./ModeAPIButton";

function MovieDetail(props) {
  const modeContextAPI = React.useContext(ModeContext);
  const { backgroundColor, textColor } = modeContextAPI.modeObj;
  const {movies} = props
  const [movie, setMovie] = useState([])
  const params = useParams()

  useEffect(() => {
    setMovie(
      movies.filter(item => Number(item.id) === Number(params.movieID))[0]
    )
  }, [])

  return (
    <div className="col-sm-6 offset-sm-3">
      <nav aria-label="breadcrumb" className="mb-5">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link className="text-warning" to="/">Home</Link></li>
          <li className="breadcrumb-item active" aria-current="page">{movie.title}</li>
        </ol>
      </nav>
      <div className={`text-center ${backgroundColor} p-5 rounded border border-2 border-warning shadow`}>
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top w-50 mb-3 rounded shadow-sm border-2 border-warning border" alt="..." />
        <h1 className={`fw-bold ${textColor}`}>{movie.title}</h1>
        <p className={`fw-light ${textColor}`}>{movie.overview}</p>
        <span class="badge bg-warning text-dark">{movie.vote_average}</span>
      </div>
    </div>
  )
}

export default MovieDetail