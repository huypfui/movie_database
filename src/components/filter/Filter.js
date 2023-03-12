// CSS import
import "./Filter.scss";

// Image import
import search from "../../img/magnifying_glass.svg";
// Component import
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export let genreData;

const Filter = ({ genreID }) => {
	const [genres, setGenres] = useState();
	const [searchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/genre/movie/list?api_key=2f42e4a86b0ac5a0f11b8f51ca045ce0&id=12&language=en-U`
		)
			.then((response) => response.json())
			.then((data) => {
				genreData = data.genres;
				return setGenres(data.genres);
			});
	}, []);

	const getSearchterm = (event) => setSearchTerm(event.target.value);

	return (
		<section className="filter">
			<article>
				<input
					type="search"
					name="search"
					id="search"
					onChange={getSearchterm}
				/>
				<Link to={`/search/${searchTerm}`}>
					<img src={search} alt="search icon" />
				</Link>
			</article>

			<article>
				{genres?.map((genre) => (
					<Link
						className={
							genreID === genre.id ? "button active" : "button inactive"
						}
						to={`/genre/${genre.id}`}
						value={genre.id}
						key={uuidv4()}>
						{genre.name}
					</Link>
				))}
			</article>
		</section>
	);
};

export default Filter;
