import React, { useEffect , useRef, useState} from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import {Link} from 'react-scroll'

import "../styles/SearchPage.css"

import Movies from '../components/Movies'
import MovieInfoPage from './MovieInfoPage'
import FeauturedPage from './FeauturedPage'

function SearchPage({SingleMovieData, handleClick, storeLocaly}) {
    const searchQuery = useRef()
    const [searchQueryValue, setSearchQueryValue] = useState("")
    const [data, setData] = useState({})

    function trackInput() {
        if(searchQuery.current.value) return
        setData({})
    }

    useEffect(() => {
        if(searchQuery.current.value !== '') {
            fetch(`http://www.omdbapi.com/?apikey=d8898664&s=${searchQueryValue}`, {method : 'get'})
            .then(res => res.json())
            .then(data => {if(data.Response) {setData(data)}else return})
        }
    }, [searchQueryValue])

    return (
        <Router>
            <div className="SearchPageContainer">
                    <div className="inputContainer"><input placeholder="Search Movies"  ref={searchQuery} onChange={(e) => {trackInput(); if(!e.target.value) {return}else{setSearchQueryValue(e.target.value)};}}/> <br/></div>
                    {searchQueryValue !== '' ? <span className="container">
                        {data.Search && searchQuery.current.value !== '' ? data.Search.map((e, i) => {
                            return <Link to="info" smooth={true} spy={true} key={i}><Movies e={e} i={i} key={i} onClick={handleClick} storeLocally={storeLocaly}/></Link>
                        }) : <></>}
                    </span> : <></> }

                    {!data.Search && searchQueryValue.length < 4  ? <FeauturedPage page={3}/> : <></>}
                    <div id="info">
                        {!SingleMovieData.Error && data.Search && searchQuery.current.value !== ""  ? <MovieInfoPage data={SingleMovieData} /> : <></>}
                    </div>
            </div>
        </Router>
    )
}

export default SearchPage
