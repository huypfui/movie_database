// CSS import
import "./MovieItem.scss"

import star from "../../img/star.svg"


const MovieItem = (props) => {
    return (
     <article className="movieItem">
        <img src={`http://image.tmdb.org/t/p/w500/${props.poster_path}`} alt="poster" className="poster"/>
            <div className="info">
                <h3>{props.title}</h3>
              <img src={star} alt="star" className="icon" />  <p>  {props.vote_average} • {props.release_date} </p>
            </div>
    </article>



    );
}

export default MovieItem;