// CSS import
import "./Trending.scss";
import { Link } from "react-router-dom";

// image import
import star from "../../img/star.svg";

const Trending = ({ poster_path, title, vote_average, id }) => {
	return (
		<Link to={`/moviedetails/${id}`}>
			<section className="trending">
				<article>
					<img
						className="poster"
						src={`http://image.tmdb.org/t/p/w500/${poster_path}`}
						alt="poster"
					/>
					<div className="info">
						<p>{title}</p>

						<span>
							<img src={star} alt="rating" />
							{vote_average.toFixed(1)}/10.0
						</span>
					</div>
				</article>
			</section>
		</Link>
	);
};

export default Trending;
