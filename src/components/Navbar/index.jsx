import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

import "./Navbar.css";

const Navbar = () => {
	const [search, setSearch] = useState("");
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();

		<HeaderView />;
		if (!search) return;

		if (location.pathname == "/tv/") {
			navigate(`/searchTv?q=${search}`);
			setSearch("");
		} else {
			navigate(`/search?q=${search}`);
			setSearch("");
		}
	};

	function HeaderView() {
		const location = useLocation();
		console.log(location.pathname);
		return location;
	}

	return (
		<nav id="navbar">
			<h2>
				<Link to="/">
					<BiCameraMovie /> MoviesLib
				</Link>
			</h2>
			<h2>
				<Link to="tv/">
					<BiCameraMovie /> TvShowLib
				</Link>
			</h2>
			<form onSubmit={handleSubmit}>
				<input type="text" placeholder="Busque um filme" onChange={(e) => setSearch(e.target.value)} value={search} />
				<button type="submit">
					<BiSearchAlt2 />
				</button>
			</form>
		</nav>
	);
};

export default Navbar;
