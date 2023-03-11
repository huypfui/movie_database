// CSS import
import "./App.css";

// Library import
// import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Component import
import Home from "./pages/Home";
import IntroApp from "./pages/IntroApp";
import GenresSearch from "./pages/GenresSearch";
import MovieDetails from "./pages/MovieDetails";
import TrendingSearch from "./pages/TrendingSearch";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<IntroApp />} />
					<Route path="/home" element={<Home />} />
					<Route path="/search" element={<GenresSearch />} />
					<Route path="/search/:search" element={<GenresSearch />} />
					<Route path="/genre/:genre" element={<GenresSearch />} />
					<Route path="/trending" element={<TrendingSearch />} />
					<Route path="/moviedetails/:name" element={<MovieDetails />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
