// import library
import {useState} from "react"
import SplashScreen from "../components/splashscreen/Splashscreen"
import {Link} from 'react-router-dom'


const IntroApp = () => {
    const [show, setShow] = useState(true) 
    const handleClick = () => {
        setShow(false)    
    } 


    return ( 
    <div>

        <h2>Enjoy Your Movie<br/>Watch Everywhere</h2>
        <p>Stream unlimited movies and TV shows<br/>on your phone,tablet, laptop, and TV.</p>
        <Link to="/Home">Get Started </Link>

        { show ? <SplashScreen handleClick={handleClick}/>  : "" }


    </div> );
}

export default IntroApp;