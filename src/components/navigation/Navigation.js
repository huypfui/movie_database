// CSS import
import "./Navigation.scss"

import homeButton from "../../img/home_grey.svg"

const Navigation = () => {
    return (
    <div>
        <img src={homeButton} alt="Home Button"/>
        <h2>Navigation</h2>
    </div>
    );
}

export default Navigation;