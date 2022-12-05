import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BsFillCalendar2CheckFill, BsFillFileEarmarkTextFill, BsFillCameraReelsFill, BsTv, BsTvFill } from "react-icons/bs";

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

	useEffect(() => {
		const tvShowUrl = `${tvShowURL}${id}?${apiKey}&language=pt-BR`;
		getTvShow(tvShowUrl);
	}, []);

	const formatDate = (date) => {
		let data = new Date(date);
		return data.toLocaleDateString("en-GB");
	};

	return (
		<div className="tv-show-page">
			{tvShow && (
				<>
					<TvShowCard tvShow={tvShow} showLink={false} />
					<p className="tagline">{tvShow.tagline}</p>
					{/* <div className="info">
						<h3>
							<BsWallet2 /> Genero:
						</h3>
						<p>[{tvShow.map((tvshow) => tvshow.genres.name)}]</p>
					</div> */}
					<div className="info">
						<h3>
							<BsFillCalendar2CheckFill /> Lançamento:
						</h3>
						<p>{formatDate(tvShow.first_air_date)}</p>
					</div>
					<div className="info">
						<h3>
							<BsFillCameraReelsFill /> Temporadas:
						</h3>
						<p>{tvShow.number_of_seasons}</p>
					</div>
					<div className="info">
						<h3>
							<BsTvFill /> Episódios:
						</h3>
						<p>{tvShow.number_of_episodes}</p>
					</div>
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
