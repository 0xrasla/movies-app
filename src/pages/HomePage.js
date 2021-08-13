import {React, useState, useEffect} from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

import NaveBar from '../components/NaveBar'
import SearchPage from './SearchPage'
import FavoritesPage from './FavoritesPage'
import FeauturedPage from './FeauturedPage'

import "../styles/FavoritePage.css"
import "../styles/HomePage.css"

function HomePage() {

    // movie component states
    const [SingleMovieData, setSignelMovieData] = useState({})
    const [imdbID, setimdbID] = useState("")
    const [fav, setFav] = useState([])

    useEffect(() => {
        fetch(`http://www.omdbapi.com/?apikey=d8898664&i=${imdbID}`)
         .then(res => res.json())
         .then(data => setSignelMovieData(data))
    }, [imdbID])

    function storeLocaly(newMovie) {
        fav.push(newMovie)
        setFav(fav)
        localStorage.setItem("favorites", JSON.stringify(fav));
    }
    
    return (
        <Router>
            <NaveBar/>
            <Switch>
            <Route path="/" exact>
            <div>
            <section className="infoContainer">
                <h2>Welcome to The World of <br/> Movies!</h2>
                <p>Its Just a Fun Project i created with My Beginner React skills!</p>
                <Link className="btn-main" to="/">Take a tour</Link>
            </section>
        </div>
            </Route>
            <Route path="/search" exact>
                <SearchPage handleClick={setimdbID} SingleMovieData={SingleMovieData} storeLocaly={storeLocaly}/>
            </Route>
            <Route path="/favorites" exact>
                <FavoritesPage/>
            </Route>
            <Route path="/feautured">
                <FeauturedPage page={2}/>
            </Route>
            </Switch>
        </Router>
    )
}

export default HomePage
