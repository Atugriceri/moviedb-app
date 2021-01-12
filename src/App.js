import React, {useState, useEffect} from 'react'
import Logo from "./logo.jpg"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import './App.css'
import MovieCard from "./components/MovieCard"
import MovieDetail from "./components/MovieDetail"
import movieDb from "./data/movieDb.json"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Context, ModeContext } from "./context/ModeContext"

const API_KEY = "891bd8493da50156ff1c26f76e69ca34";

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const reactForm = e => {
    e.preventDefault();
    const APIURL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`;
    fetch(APIURL)
      .then(res => res.json())
      .then(data => setMovies(data.results));
  };


  return (
    <Context>
      <div>
      <Router>
        <Navbar />
        <div className="container mt-5">
        <div className="row">
          <Switch>
            <Route exact path="/">
              <div className="col-sm-12 text-center">
                <h1 className="fw-bold mb-3 text-warning">Movie Search</h1>
              </div>
              <div className="col-sm-12 mb-5">
                <form className="text-center">
                  <div className="row g-2 text-center">
                    <div>
                      <input 
                        type="text" 
                        className="form-control bg-dark text-warning input-warning border border-2 border-warning" 
                        placeholder="Movie Search" 
                        name="query" 
                        onChange={e => setQuery(e.target.value)} 
                      />
                    </div>
                    <div className="col">
                      <button onClick={reactForm} type="submit" className="btn btn-warning mt-3 fw-bold">Search</button>
                    </div>
                  </div>
                </form>
              </div>
              {
                movies.filter(elem => elem.poster_path)
                .map(elem => <MovieCard key={elem.id} movie={elem} />)
              }
            </Route>
            <Route path="/movie/:movieID">
              <MovieDetail movies={movies} />
            </Route>
          </Switch>
        </div>
      </div>
        <Footer />
      </Router>
      </div>
    </Context>
  );
}

export default App;
