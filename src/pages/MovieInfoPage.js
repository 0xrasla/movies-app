function MovieInfoPage({data, onClick}) {
    let dataTemp = data;
    // delete dataTemp.Poster
    // delete dataTemp.Ratings
    delete dataTemp.Response
    delete dataTemp.Website

    if(dataTemp.Poster === "N/A") {data.Poster = "https://placeholder.pics/svg/250x300/DEDEDE/555555/Poster%20Not%20Found";}

    return (
        <div className="info-container"> 
            <img src={dataTemp.Poster} alt="No Poster" key={"image"}></img>
            <div className="BaseContainer">
            {!data.Response ? Object.keys(dataTemp).map((e, i) => {
                return <span key={i}>
                    {e !== "Poster" && e !== "Ratings" ? <p className="movie-Info-Container" key={i}>{e} : <span className="info">{Object.values(data)[i]}</span></p> : <></>}
                </span>
            }): <></>}
            </div>
        </div>
    )
}

export default MovieInfoPage
