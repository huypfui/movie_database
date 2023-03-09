// component import
import Filter from "../components/filter/Filter"
import Trending from '../components/trending/Trending'
import Navigation from '../components/navigation/Navigation'


// library import
import { useState,useEffect } from "react"
import { Link } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';


const apiKey = "2f42e4a86b0ac5a0f11b8f51ca045ce0"

const Home = () => {
    const [trending,setTrending] = useState([]);
    const [searchTerm,setSearchTerm] = useState("");
    const [searchResults,setSearchResults] = useState(null);
    const getSearchterm = (event) =>  (setSearchTerm(event.target.value))

        useEffect(()=>{
            fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`)
                .then(response=>response.json())
                .then(data=> setTrending(data.results))

        },[])

        const search = () => {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=2f42e4a86b0ac5a0f11b8f51ca045ce0&query=${searchTerm}&language=en-US&page=1&include_adult=false`)
            .then(response => response.json())
            .then(searchData => {
                // console.log(searchData.results)
                setSearchResults(searchData.results)}
            )

            }
            
            
            const handleClick = () => {
                console.log('search button clicked');
                search();
                if (searchResults !== null && searchResults !== undefined) {
                    console.log("Hallo", searchResults);
                  }
            }


// useEffect(()=>{
//         fetch(`https://api.themoviedb.org/3/search/movie?api_key=2f42e4a86b0ac5a0f11b8f51ca045ce0&query=${searchTerm}&language=en-US&page=1&include_adult=false`)
//         .then(response => response.json())
//         .then(searchData => {
//             console.log(searchData.results)
//             setSearchResults(searchData.results)}
//         )
// },[searchTerm])


if (searchResults !== null && searchResults !== undefined) {
    console.log("Hallo", searchResults);
  }
// let results = searchResults && searchResults

// console.log("results",results);

// console.log("searchTerm",searchTerm);
// console.log(trending);



return (

    <div className="Home">
        <h2>Welcome</h2>
        
        <Filter handleChange={getSearchterm} handleClick={handleClick} searchResults={searchResults} />
        {/* <Filter handleChange={getSearchterm} searchResults={searchResults} /> */}

        <h3> Trending Movies</h3>
        <Link> See all </Link>
        <section className="carusell">
            { trending.map((movie)=> 
                <Trending {...movie} key={uuidv4()}/>
            ) }

        </section>
        <Navigation/>


    </div>
    );
}

export default Home;