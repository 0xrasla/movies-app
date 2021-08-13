import { useEffect, useState } from "react"

function FavoritesPage() {

    const [fav, setFav] = useState([])

    useEffect(() => {
        setFav(JSON.parse(localStorage.getItem("favorites")));
    }, [])

    return (
        <div className="main">
            <h1>
            Favorites
            </h1>
            <div className="container">
            {fav ? fav.map((e,i) => {
                return <div className="indivual" key={i}>
                    <div key={i} className="indivual">
                    <img alt="Poster for the movie" src={e.Poster} width="160px" height="260"></img>
                    <p>{e.Title}</p>
                    <p>{e.Year}</p>
                    </div>
                </div>
            }) : <div>No Favorites Added Yet</div>}
        </div>
        </div>
    )
}

export default FavoritesPage
