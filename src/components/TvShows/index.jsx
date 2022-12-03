import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";

import TvShowCard from "../TvShowCard";

import "./TvShows.css";

const tvShowURL = import.meta.env.VITE_API_TVSHOW;
const apiKey = import.meta.env.VITE_API_KEY;

const tvShow = () => {
  const { id } = useParams();
  const [tvShow, setTvShow] = useState(null);

  const getTvShow = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setTvShow(data);
  };

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  useEffect(() => {
    const tvShowUrl = `${tvShowURL}${id}?${apiKey}&language=pt-BR`;
    getTvShow(tvShowUrl);
  }, []);

  return (
    <div className="tv-show-page">
      {tvShow && (
        <>
          <TvShowCard tvShow={tvShow} showLink={false} />
          <p className="tagline">{tvShow.tagline}</p>
          {/* <div className="info">
            <h3>
              <BsWallet2 /> Orçamento:
            </h3>
            <p>{formatCurrency(tvShow.budget)}</p>
          </div>
          <div className="info">
            <h3>
              <BsGraphUp /> Faturamento:
            </h3>
            <p>{formatCurrency(tvShow.revenue)}</p>
          </div>
          <div className="info">
            <h3>
              <BsHourglassSplit /> Duração:
            </h3>
            <p>{tvShow.runtime} minutos</p>
          </div> */}
          <div className="info description">
            <h3>
              <BsFillFileEarmarkTextFill /> Descrição:
            </h3>
            <p>{tvShow.overview}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default tvShow;
