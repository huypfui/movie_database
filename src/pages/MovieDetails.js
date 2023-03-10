// library import
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

// component import
import MovieInfo from "../components/movieInfo/MovieInfo";
import Navigation from "../components/navigation/Navigation";
import BackButton from "../components/backbutton/BackButton";

const MovieDetail = () => {
	const params = useParams();
	let movieID = params.name;
	const [movieDetails, setMovieDetails] = useState(null);

	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/movie/${movieID}?api_key=d603b23be9d778e54ec780db901ad054&language=en-US`
		)
			.then((response) => response.json())
			.then((data) => setMovieDetails(data));
	}, []);
	console.log(movieDetails);
	// console.log(movieDetails.genres);
	// console.log(movieDetails.spoken_languages);

	return (
		<div
			className="movieDetail"
			style={
				movieDetails && {
					backgroundImage: `url(http://image.tmdb.org/t/p/w500/${movieDetails.poster_path})`,
				}
			}>
			<BackButton />

			<MovieInfo movieDetails={movieDetails} />

			<div className="nav">
				<Navigation />
			</div>
		</div>
	);
};

export default MovieDetail;
