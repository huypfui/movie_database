import "./Splashscreen.scss"
import "../../fonts/Montserrat/Montserrat-VariableFont_wght.ttf"


function SplashScreen(props) {


    return (
            <div className="splashscreen" onClick={props.handleClick}>
            <h1 className="font-face-montserrat">.MOV</h1>
            </div>
    )
}

export default SplashScreen;