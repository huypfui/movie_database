// CSS import 
import './App.css';

// Library import
import { useState, useEffect } from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"

// Component import
import Home from "./pages/Home"
import IntroApp from "./pages/IntroApp"
import GenresSearch from "./pages/GenresSearch"
import MovieDetails from "./pages/MovieDetails"


function App() {
  const [trendMovie, setTrendMovie] = useState([])
  const apiKey = "2f42e4a86b0ac5a0f11b8f51ca045ce0"

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        setTrendMovie(data)
      })
  }, [])

  console.log(trendMovie)

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroApp/>}/>
        <Route path="/home" element = {<Home/>}/>
        <Route path ="/search" element = {<GenresSearch/>}/>
        <Route path ="/moviedetails/:trending" element = {<GenresSearch/>}/>
        <Route path ="/moviedetails/:name" element={<MovieDetails/>}/>
        

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
