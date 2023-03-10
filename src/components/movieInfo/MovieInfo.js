// style import
import "./MovieInfo.scss";

// import { genreData } from "../filter/Filter";

// image import
import play from "../../img/play.svg";
import star from "../../img/star.svg";

const MovieInfo = ({ movieDetails, handleclick }) => {
	console.log("m", movieDetails);

	let genre = movieDetails.genres.map((genre) => genre.name).join(" ");
	console.log(genre);

	return (
		<>
			<section className="movieInfo">
				<p>Movie Details</p>
				<h2>{movieDetails.title}</h2>
				<div className="info">
					<img src={star} alt="star" className="icon" />
					<p>
						• {movieDetails.vote_average.toFixed(1)} •
						{movieDetails.release_date.slice(0, 4)} •
						{movieDetails.genres[0].name}
					</p>
				</div>
				<article>
					<h3>Overview</h3>
					<p>
						{movieDetails.overview.slice(0, 200)} <span> See more...</span>
					</p>

					<div className="genre">
						<h5>Genres</h5>
						<p>{genre}</p>
					</div>

					{/* <h5>Languages{movieDetails?.spoken_languages}</h5> */}
				</article>
				<button onClick={handleclick}>
					<img src={play} alt="youtube play icon" />
					Watch Trailer
				</button>
			</section>
		</>
	);
};

export default MovieInfo;
