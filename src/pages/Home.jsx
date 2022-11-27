import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url)
    const data = await res.json()

    setTopMovies(data.results)
    console.log(data.results)
  };

  useEffect(() => {

    const topRatedURL = `${moviesURL}top_rated?${apiKey}&language=pt-BR
    `

    getTopRatedMovies(topRatedURL)
  }, []);

  return (
    <div className="container">
      <h2 className="title">Melhores filmes</h2>
      <div className="movies-container">
        {topMovies.push === 0 && <p>Carregando...</p>}
        {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
      </div>
    </div>
  );
};

export default home;