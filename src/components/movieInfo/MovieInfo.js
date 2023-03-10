// library import
import { Link } from "react-router-dom";

// style import
import "./MovieInfo.scss";

//component import
import { genreData } from "../filter/Filter";

// image import
import play from "../../img/play.svg";
import star from "../../img/star.svg";
import { useEffect, useState } from "react";

const MovieInfo = ({ movieDetails }) => {
	console.log(movieDetails);

	function getGenre(id) {
		return genreData.find((genre) => genre.id == id);
	}

	const [key,setKey] = useState()

	useEffect (()=>{
        fetch(`https://api.themoviedb.org/3/movie/${movieDetails.id}/videos?api_key=2f42e4a86b0ac5a0f11b8f51ca045ce0`)
        .then(response => response.json())
        .then(data => setKey(data.results[0].key))
        },[movieDetails.id])

	console.log(movieDetails)

	return (
		<>
			{/* {movieDetails && ( */}
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

					<Link to={`https://www.youtube.com/embed/${key}?rel=0&amp;autoplay=1;autohide=0;fs=0;hd=0=mute=1`}>
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