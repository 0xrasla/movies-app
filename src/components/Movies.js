function Movies({e, i, onClick, storeLocally}) {
    if(e.Poster === "N/A") e.Poster = "https://placeholder.pics/svg/250x300/DEDEDE/555555/Poster%20Not%20Found";

    return (
        <div className="indiContainer">
            <>
                    <div key={i} className="indivual">
                    <img alt="Poster for the movie" src={e.Poster} width="160px" height="260" onClick={() => { onClick(e.imdbID)}}></img>
                    <p className="addtofav" onClick={() => storeLocally(e)}>Add to Favorites</p>
                    <p>{e.Title}</p>
                    <p>{e.Year}</p>
                    </div>
        </>
        </div>
    )
}

export default Movies
