// CSS import
import "./MovieItem.scss"
import star from "../../img/star.svg"


const MovieItem = (props) => {
    return (
     <article>
        <img src={`http://image.tmdb.org/t/p/w500/${props.poster_path}`} alt="poster"/>
            <p>{props.title}
            <img src={star} alt="star" />
            {props.vote_average} • {props.release_date}
            </p>
    </article>



    );
}

export default MovieItem;