import "./Splashscreen.scss"
import "../../fonts/Montserrat/Montserrat-Bold.ttf"


function SplashScreen(props) {


    return (
            <div className="splashscreen" onClick={props.handleClick}>
            <h1 className="font-face-montserrat">.MOV</h1>
            </div>
    )
}

export default SplashScreen;