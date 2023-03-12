// library import
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

// Component Import
import Filter from "../components/filter/Filter";
import MovieItem from "../components/movieItem/MovieItem";
import Navigation from "../components/navigation/Navigation";

// Style import
import "./GenreSearch.scss";

const GenreSearch = () => {
	const [searchResults, setSearchResults] = useState();
	const [genreResult, setGenreResult] = useState();

	const apiKey = "2f42e4a86b0ac5a0f11b8f51ca045ce0";

	// for the genre resutl
	const params = useParams();
	console.log("id", params);

	// Get Movie list according to genre
	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/discover/movie?api_key=2f42e4a86b0ac5a0f11b8f51ca045ce0&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${params.genre}&with_watch_monetization_types=flatrate`
		)
			.then((response) => response.json())
			.then((data) => setGenreResult(data.results));
	}, [params.genre]);

	console.log(params, genreResult);

	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${params.search}&language=en-US&page=1&include_adult=false`
		)
			.then((response) => response.json())
			.then((searchData) => setSearchResults(searchData.results));
	}, [params.search]);

	return (
		<>
			<Filter genreID={params?.genre} />
			{/* <Filter filteredData={handleData} /> */}

			<article className="movieList">
				{/* Iterate through search results to display */}

				{params.search && searchResults
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
