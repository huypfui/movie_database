// CSS import
import "./Trending.scss"

const Trending = ({poster_path,title,vote_average}) => {
    return (
        <section className="trending">
        
            <article>
                <img src={`http://image.tmdb.org/t/p/w500/${poster_path}`} alt="poster" width="100%"/>
                <div className="info">
                    <p>{title}</p>
                    <span>{vote_average}/10.0</span>
                </div>
            </article>

        </section>

    );
}

export default Trending;