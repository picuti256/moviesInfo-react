import { useState, useEffect } from "react";
import TvShowCard from "../components/TvShowCard";

import './movieGrid.css';

const tvShowAPI = process.env.VITE_API_TVSHOW;
const apiKey = process.env.VITE_API_KEY;

const home = () => {
  const [topTvShows, setTopTvShows] = useState([]);

  const getTopRatedTvShow = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setTopTvShows(data.results);
  };

  useEffect(() => {

    const topRatedURL = `${tvShowAPI}top_rated?${apiKey}&language=pt-BR
    `

    getTopRatedTvShow(topRatedURL)
  }, []);

  return (
    <div className="container">
      <h2 className="title">Séries mais bem avaliadas: </h2>
      <div className="movies-container">
        {topTvShows.length === 0 && <p>Carregando...</p>}
        {topTvShows.length > 0 && topTvShows.map((tvShow) => <TvShowCard key={tvShow.id} tvShow={tvShow}/>)}
      </div>
    </div>
  );
};

export default home;
