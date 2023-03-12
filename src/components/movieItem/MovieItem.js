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
	console.log(genreData);
	// get the genre from list

	let genre = genreData?.find((genre) => genre.id === props.genre_ids[0])?.name;
	console.log(genre);

	// fallback if image doesn't exist
	let img =
		props.poster_path !== null
			? `http://image.tmdb.org/t/p/w500/${props.poster_path}`
			: notFound;

		const toHoursAndMinutes = (total) => {
			let hours = Math.floor(total / 60);
			let min = total % 60;
			return `${hours}h${min > 0 ? ` ${min}m` : ""}`;
		};

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
					{+props?.vote_average.toFixed(1)} • {" "}
					{props?.release_date.slice(0, 4)} • {genre} • {" "}
					{toHoursAndMinutes(props?.runtime)}
				</p>
			</div>
		</Link>
	);
};

export default MovieItem;
