import beerPic from "../assets/beers.png"
import randomBeerPic from "../assets/random-beer.png"
import newBeerPic from "../assets/new-beer.png"
import { Link } from "react-router-dom"


function HomePage() {

    return (
        <div>
            <div>
                
                <img src={beerPic} alt="beer pic"/>
                <Link to="/beers">
                    <h1>All Beers</h1>
                </Link>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis sed metus fermentum rhoncus. Morbi ac quam eget metus sagittis cursus.</p>
            </div>
            <div>
                <img src={randomBeerPic} alt="random beer pic"/>
                <Link to="/random-beer">
                <h1>Random Beers</h1>
                </Link>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis sed metus fermentum rhoncus. Morbi ac quam eget metus sagittis cursus.</p>
            </div>
            <div>
                <img src={newBeerPic} alt="new beer pic"/>  
                <Link to="/new-beer">
                <h1>New Beer</h1>
                </Link>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis sed metus fermentum rhoncus. Morbi ac quam eget metus sagittis cursus.</p>
            </div>
        </div>
    )
}

export default HomePage