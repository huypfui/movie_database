// style import
import "./MovieInfo.scss";

import { genreData } from "../filter/Filter";

// image import
import play from "../../img/play.svg";
import star from "../../img/star.svg";
const MovieInfo = ({ movieDetails }) => {
	console.log(movieDetails);

	function getGenre(id) {
		return genreData.find((genre) => genre.id == id);
	}

	return (
		<>
			{movieDetails && (
				<section className="movieInfo">
					<p>Movie Details</p>
					<h2>{movieDetails?.title}</h2>
					<div className="info">
						<img src={star} alt="star" className="icon" />
						<p>
							• {movieDetails?.vote_average.toFixed(1)} •
							{movieDetails.release_date.slice(0, 4)} •
						</p>
					</div>
					<article>
						<h3>Overview</h3>
						<p>
							{movieDetails?.overview.slice(0, 200)} <span> See more...</span>
						</p>
						<h5>{/* Genres <p>{movieDetails?.genres}</p> */}</h5>
						{/* <h5>Languages{movieDetails?.spoken_languages}</h5> */}
					</article>
					<button>
						<img src={play} alt="youtube play icon" />
						Watch Trailer
					</button>
				</section>
			)}
		</>
	);
};

export default MovieInfo;
