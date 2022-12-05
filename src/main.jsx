import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import HomeTvShows from "./pages/HomeTvShows";
import TvShow from "./components/TvShows";
import Movie from "./components/Movie";
import Search from "./pages/Search";
import SearchTv from "./pages/SearchTv";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route element={<App />}>
					<Route path="/" element={<Home />} />
					<Route path="tv/" element={<HomeTvShows />} />
					<Route path="movie/:id" element={<Movie />} />
					<Route path="tv/:id" element={<TvShow />} />
					<Route path="search" element={<Search />} />
					<Route path="searchTv" element={<SearchTv />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
