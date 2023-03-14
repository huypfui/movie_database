// library import
import { Link } from "react-router-dom";

// style import
import "./MovieInfo.scss";

// image import
import play from "../../img/play.svg";
import star from "../../img/star.svg";
import { useEffect, useState } from "react";

const MovieInfo = ({ movieDetails }) => {
	let genre = movieDetails.genres.map((genre) => genre.name).join(", ");

	const [key, setKey] = useState();

	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/movie/${movieDetails.id}/videos?api_key=2f42e4a86b0ac5a0f11b8f51ca045ce0`
		)
			.then((response) => response.json())
			.then((data) => setKey(data.results[0].key));
	}, [movieDetails.id]);

	// function to turn runtime in minutes into hour and minutes
	const toHoursAndMinutes = (total) => {
		let hours = Math.floor(total / 60);
		let min = total % 60;
		return `${hours}h${min > 0 ? ` ${min}m` : ""}`;
	};

	const [details, showDetails] = useState(false);

	return (
		<>
			{/* {movieDetails && ( */}
			<section className="movieInfo">
				<p>Movie Details</p>
				<h2>{movieDetails?.title}</h2>
				<div className="info">
					<img src={star} alt="star" className="icon" />
					<p>
						<span>{movieDetails?.vote_average.toFixed(1)} </span>•{" "}
						{movieDetails.release_date.slice(0, 4)} •{" "}
						{movieDetails.genres[0].name} •{" "}
						{toHoursAndMinutes(movieDetails.runtime)}
					</p>
				</div>
				<article>
					<h3>Overview</h3>
					<p>
						{!details
							? movieDetails.overview.slice(0, 130) + ". . ."
							: movieDetails.overview}

						{!details ? (
							<span className="seeMore" onClick={() => showDetails(!details)}>
								{" "}
								See more
							</span>
						) : (
							<span className="seeMore" onClick={() => showDetails(!details)}>
								{" "}
								Show less
							</span>
						)}
						{/* {movieDetails.overview.slice(0, 200)}{" "}
						<span className="seeMore" onClick={handleClick}> See more...</span> */}
					</p>

					<div className="genre">
						<h5>Genres</h5>
						<p>{genre}</p>
					</div>
				</article>

				<Link
					to={`https://www.youtube.com/embed/${key}?rel=0&amp;autoplay=1;autohide=0;fs=0;hd=0=mute=1`}>
					<button>
						<img src={play} alt="youtube play icon" />
						Watch Trailer
					</button>
				</Link>
			</section>
			{/* )} */}
		</>
	);
};

export default MovieInfo;

// Link auf den wir verlinken müssen https://www.youtube.com/watch?v={Key}
// den Key bekommen wir über die ID und diesen API Link https://api.themoviedb.org/3/movie/{Movie ID}/videos?api_key=2f42e4a86b0ac5a0f11b8f51ca045ce0
