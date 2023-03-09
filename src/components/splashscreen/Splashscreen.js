import "./Splashscreen.scss"

function SplashScreen(props) {
  

    return (
        <div className="splashscreen" onClick={props.handleClick}>
            <h1>.MOV</h1>
        </div>
    )
}

export default SplashScreen