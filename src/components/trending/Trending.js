// CSS import
import "./Trending.scss";
import { Link } from "react-router-dom";

const Trending = ({ poster_path, title, vote_average, id }) => {
	return (
		<Link to={`/moviedetails/${id}`}>
			<section className="trending">
				<article>
					<img
						src={`http://image.tmdb.org/t/p/w500/${poster_path}`}
						alt="poster"
						width="100%"
					/>
					<div className="info">
						<p>{title}</p>
						<span>{vote_average}/10.0</span>
					</div>
				</article>
			</section>
		</Link>
	);
};

export default Trending;
