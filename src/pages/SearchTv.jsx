import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import TvShowCard from "../components/TvShowCard";
const searchURL = import.meta.env.VITE_SEARCH_TV;
const apiKey = import.meta.env.VITE_API_KEY;

import "./movieGrid.css";

const searchTv = () => {
	const [searchParams] = useSearchParams();

	const [tvShow, setTvShow] = useState([]);
	const query = searchParams.get("q");

	const getSearchedTvShow = async (url) => {
		const res = await fetch(url);
		const data = await res.json();

		setTvShow(data.results);
	};

	useEffect(() => {
		const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}&language=pt-BR
    `;

		getSearchedTvShow(searchWithQueryURL);
	}, [query]);

	return (
		<div className="container">
			<h2 className="title">
				Resultado para: <span className="query-text">{query}</span>
			</h2>
			<div className="movies-container">
				{tvShow.length === 0 && <p>Carregando...</p>}
				{tvShow.length > 0 && tvShow.map((tvShow) => <TvShowCard key={tvShow.id} tvShow={tvShow} />)}
			</div>
		</div>
	);
};

export default searchTv;
