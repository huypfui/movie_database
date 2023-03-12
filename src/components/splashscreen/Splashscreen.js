import "./Splashscreen.scss"

function SplashScreen(props) {


    return (

            <div className="splashscreen" onClick={props.handleClick}>
            <h1 className="font-face-montserrat">.MOV</h1>
            </div>
    )
}

export default SplashScreen;