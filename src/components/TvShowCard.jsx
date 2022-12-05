import { Link } from "react-router-dom";

import { FaStar } from "react-icons/fa";

const imageUrl = import.meta.env.VITE_IMG;

const TvShowCard = ({ tvShow, showLink = true }) => {
	return (
		<div className="tv-show-card">
			<img src={imageUrl + tvShow.poster_path} alt={tvShow.title} />
			<h2>{tvShow.name}</h2>
			<p>
				<FaStar /> {tvShow.vote_average}
			</p>
			{showLink && <Link to={`/tv/${tvShow.id}`}>Detalhes</Link>}
		</div>
	);
};

export default TvShowCard;
