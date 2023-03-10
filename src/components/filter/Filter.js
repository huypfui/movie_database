// CSS import
import "./Filter.scss"

//image import
import search from "../../img/magnifying_glass.svg"
import {Link} from "react-router-dom"
import { useEffect,useState } from "react"
import { v4 as uuidv4 } from 'uuid';

const Filter = (props) => {
    const [genres,setGenres]= useState();
    const[genreId,setGenreId] = useState();
    const [searchTerm,setSearchTerm] = useState("");
    
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=2f42e4a86b0ac5a0f11b8f51ca045ce0&id=12&language=en-U`)
        .then(response => response.json())
        .then(data => setGenres(data.genres))
    },[])


    // Get Movie list filtered after genre
    const searchGenre = (event) => {
        setGenreId(event.target.value)
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=2f42e4a86b0ac5a0f11b8f51ca045ce0&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}&with_watch_monetization_types=flatrate`)
        .then(response => response.json())
        .then(data => props.filteredData(data))
        // .then(data => console.log(data))
        
    }
    
    console.log(genreId);
    const getSearchterm = (event) =>  (setSearchTerm(event.target.value))

    return ( 
    <section>

        <article>
            <input type="search" name="search" id="search" onChange={getSearchterm}/>
            <Link to="/search" state={searchTerm}>
                <img src={search} alt="search icon" />
            </Link>
        </article>
        

        <article>
                    {genres?.map((genre)=> 
                    
                    <button value={genre.id} key={uuidv4()} onClick={searchGenre}> 
                    {genre.name}
                    
                    </button> )}
        </article>

    </section>
        
        );
}

export default Filter;