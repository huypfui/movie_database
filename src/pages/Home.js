// component import
import Filter from "../components/filter/Filter";
import Trending from "../components/trending/Trending";
import Navigation from "../components/navigation/Navigation";

// library import
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
	const [trending, setTrending] = useState([]);

	const apiKey = "2f42e4a86b0ac5a0f11b8f51ca045ce0";

	// Get Trending Movies Data and save in trending state
	useEffect(() => {
		fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`)
			.then((response) => response.json())
			.then((data) => setTrending(data.results));
	}, []);

	console.log(trending);

	return (
		<div className="Home">
			<h2>Welcome</h2>

			<Filter />

			<div className="trendingTitle">
				<h3> Trending Movies</h3>
				<Link to="/trending" state={trending}>
					See all
				</Link>
			</div>
			{/* Iterate through Trending Movies Data to display movie details */}

			<section className="carusell">
				{trending.map((movie) => (
					<Trending {...movie} key={uuidv4()} />
				))}
			</section>

			<Navigation home />
		</div>
	);
};

export default Home;
