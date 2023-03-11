// library import
import { useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

// Component Import
import Filter from "../components/filter/Filter";
import MovieItem from "../components/movieItem/MovieItem";

const TrendingSearch = () => {
	const trendingValue = useLocation();

	console.log(trendingValue.state);

	return (
		<article>
			<Filter />
			{trendingValue &&
				trendingValue?.state.map((movie) => (
					<MovieItem {...movie} key={uuidv4()} />
				))}
		</article>
	);
};

export default TrendingSearch;
