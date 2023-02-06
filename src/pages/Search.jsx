import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const searchURL = process.env.VITE_SEARCH
const apiKey = process.env.VITE_API_KEY 

import './movieGrid.css';

const search = () => {
  const [searchParams] = useSearchParams();

  const [movies, setMoveis] = useState([]);
  const query = searchParams.get("q");

  const getSearchedMovies = async (url) => {
    const res = await fetch(url)
    const data = await res.json()

    setMoveis(data.results)
  };

  useEffect(() => {

    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}&language=pt-BR
    `

    getSearchedMovies(searchWithQueryURL)
  }, [query]);

  return (
    <div className="container">
      <h2 className="title">
        Resultado para: <span className="query-text">{query}</span>
      </h2>
      <div className="movies-container">
        {movies.length === 0 && <p>Carregando...</p>}
        {movies.length > 0 &&
         movies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
      </div>
    </div>
  )
}

export default search;
