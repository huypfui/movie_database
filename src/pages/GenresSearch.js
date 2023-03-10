// library import
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

// Component Import
import Filter from "../components/filter/Filter";
import MovieItem from "../components/movieItem/MovieItem";


// Style import
import "./GenreSearch.scss";
import Navigation from "../components/navigation/Navigation";

const GenreSearch = () => {
	const [searchResults, setSearchResults] = useState(null);
	const [genreResult, setGenreResult] = useState();
	const searchValue = useLocation();

	function handleData(data) {
		setGenreResult(data.results);
	}
	const apiKey = "2f42e4a86b0ac5a0f11b8f51ca045ce0";

	console.log("genre", genreResult);

	// Get Movie list (searchresult) according to searchValue
	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchValue.state}&language=en-US&page=1&include_adult=false`
		)
			.then((response) => response.json())
			.then((searchData) => setSearchResults(searchData.results));
	}, [searchValue.state]);

	return (
		<>
			<Filter filteredData={handleData} />

			<article className="movieList">
				{/* Iterate through search results to display */}

				{!genreResult
					? searchResults?.map((movie) => (
							<MovieItem {...movie} key={uuidv4()} />
					))
					: genreResult?.map((movie) => (
							<MovieItem {...movie} key={uuidv4()} />
					))}
			</article>
			<Navigation />
		</>
	);
};

export default GenreSearch;
