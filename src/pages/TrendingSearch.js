// library import
import { useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

// Component Import
import Filter from "../components/filter/Filter";
import MovieItem from "../components/movieItem/MovieItem";
import Navigation from "../components/navigation/Navigation";


const TrendingSearch = () => {
	const trendingValue = useLocation();

	console.log(trendingValue.state);

	return (
        <>
        <Filter />
		    <article className="movieList">
			
                {trendingValue &&
                    trendingValue?.state.map((movie) => (
                        <MovieItem {...movie} key={uuidv4()} />
                    ))}
            
		    </article>
        <div className="nav">
			<Navigation />
		</div>
        </>
	);
};

export default TrendingSearch;
