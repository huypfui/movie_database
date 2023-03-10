// CSS import
import "./MovieItem.scss";

// Image import
import bookmark from "../../img/bookmark.svg";
import star from "../../img/star.svg";
import notFound from "../../img/notfound.jpeg";

// Data import
import { genreData } from "../filter/Filter";

// Library import
import { Link } from "react-router-dom";

const MovieItem = (props) => {
	// get the genre from list
/* 	function getGenre(id) {
		return genreData.find((genre) => genre.id == id);
	} */

	// fallback if image doesn't exist
	let img =
		props.poster_path !== null
			? `http://image.tmdb.org/t/p/w500/${props.poster_path}`
			: notFound;

	return (
		<Link to={`/moviedetails/${props.id}`} className="movieItem">
			<img src={img} alt="poster" className="poster" />

			<div className="movieTitle">
				<h3>{props.title}</h3>
				<img src={bookmark} alt="bookmark icon " className="icon" />
			</div>
			<div className="info">
				<img src={star} alt="star" className="icon" />
				<p>
					• {+props.vote_average.toFixed(1)} • {props.release_date.slice(0, 4)}{" "}
					•{getGenre(props.genre_ids[0])?.name}
				</p>
			</div>
		</Link>
	);
};

export default MovieItem;
