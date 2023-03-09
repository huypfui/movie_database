// CSS import
import "./Filter.scss"

//image import
import search from "../../img/magnifying_glass.svg"
import {Link} from "react-router-dom"

const Filter = (props) => {

    // const resultAll = props.searchResults
    // console.log(resultAll)
    
    return ( 
    <section>

        <input type="search" name="search" id="search" onChange={props.handleChange}/>
        <Link to="/search" onClick={props.handleClick} >
            <img src={search} alt="search icon" />
        </Link>

    </section>
        
        );
}

export default Filter;