// library import
import { useParams, useSearchParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

// Component Import
import Filter from "../components/filter/Filter";
import MovieItem from "../components/movieItem/MovieItem";
import Navigation from "../components/navigation/Navigation";

const GenreSearch = () => {
	const [searchResults, setSearchResults] = useState([]);
	const [genreResult, setGenreResult] = useState([]);
	const [page, setPage] = useState(1);
	// container of movieitems
	const movielistRef = useRef(null);
	// get params for genre and searchTerm
	const params = useParams();
	const apiKey = "2f42e4a86b0ac5a0f11b8f51ca045ce0";

	// fetch movies according to genre
	useEffect(() => {
		fetchMovies();
	}, [page, params.genre]);

	// fetch movies according to searchTerm
	useEffect(() => {
		fetchResults();
	}, [page, params.search]);

	// reset page count when genre changes and go back to top
	useEffect(() => {
		setPage(1);
		movielistRef.current.scrollTop = 0;
	}, [params.genre]);

	// reset page count when searchTerm changes and go back to top
	useEffect(() => {
		setPage(1);
		movielistRef.current.scrollTop = 0;
	}, [params.search]);

	// function to fetch movies according to genre
	function fetchMovies() {
		if (params.genre !== null && params.genre !== undefined) {
			const url = `https://api.themoviedb.org/3/discover/movie?api_key=2f42e4a86b0ac5a0f11b8f51ca045ce0&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${params.genre}&with_watch_monetization_types=flatrate`;

			//initial fetch
			if (page === 1) {
				fetch(url)
					.then((response) => response.json())
					.then((data) => setGenreResult(data.results));
			} else {
				// fetch on scroll
				fetch(url)
					.then((response) => response.json())
					.then((data) => setGenreResult([...genreResult, ...data.results]));
			}
		}
	}

	// Get Movie list according to search term

	function fetchResults() {
		const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${params.search}&language=en-US&page=${page}&include_adult=false`;
		if (params.search !== undefined && params.search !== null) {
			//intial fetch
			if (page === 1) {
				fetch(url)
					.then((response) => response.json())
					.then((searchData) => setSearchResults(searchData.results));
			} else {
				// fetch on scroll
				fetch(url)
					.then((response) => response.json())
					.then((searchData) => {
						setSearchResults([...searchResults, ...searchData.results]);
					});
			}
		}
	}

	// check if we scrolled to the bottom of the movielist container
	function handleScroll(event) {
		const element = event.target;
		if (element.scrollHeight - element.scrollTop === element.clientHeight) {
			setPage(page + 1);
		}
	}
	// adding our scroll function the event scroll
	useEffect(() => {
		const movielist = movielistRef.current;
		movielist.addEventListener("scroll", handleScroll);
		return () => {
			movielist.removeEventListener("scroll", handleScroll);
		};
	}, [page]);

	return (
		<>
			<Filter genreID={params?.genre} />
			<article className="movieList" ref={movielistRef}>
				{/* Iterate through search results to display */}

				{params.search && searchResults
					? searchResults?.map((movie) => (
							<MovieItem {...movie} key={uuidv4()} />
					))
					: genreResult?.map((movie) => (
							<MovieItem {...movie} key={uuidv4()} />
					))}
			</article>

			<div className="nav">
				<Navigation />
			</div>
		</>
	);
};

export default GenreSearch;
