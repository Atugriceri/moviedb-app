import React, { useState, Fragment } from "react"
import {Link} from "react-router-dom"
import { ModeContext } from "../context/ModeContext";
import ModeAPIButton from "./ModeAPIButton";

function MovieCard(props) {
  const modeContextAPI = React.useContext(ModeContext);
  const { backgroundColor, textColor } = modeContextAPI.modeObj;
  const {id, title, poster_path, overview} = props.movie
  console.log(props)
  return (
    <div className="col-sm-3 mb-4">
    <div className={`card h-100 text-center border-2 border-warning shadow-sm ${backgroundColor} ${textColor}`}>
      <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title fw-normal">{title}</h5>
        <p className="card-text fw-light">{overview.substring(0, 50)}..</p>
        <Link to={`/movie/${id}`} className="btn btn-warning fw-bold">Detail</Link>
      </div>
    </div>
    </div>
  )
}

MovieCard.defaultProps = {
  movie: {
    title: "None" ,
    img: "https://picsum.photos/id/100/400/300"
  }
}

export default MovieCard