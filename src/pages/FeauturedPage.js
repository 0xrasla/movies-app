import {useEffect, useState } from 'react'
import "../styles/FeauturedPage.css"

const IMG_API = "https://image.tmdb.org/t/p/w1280"

function FeauturedPage({page}) {

    const [Feautured, setFeautured] = useState([])

    useEffect(() => {
         
    }, [])

    return (
        <div className="SectionContainer">
            <div className="container">
            {Feautured ? Feautured.map((e,i) => {
                return (
                    <div className="indivual" key={i}>
                        <p>
                            <img src={IMG_API + e.poster_path} alt="" />
                            {e.original_title}
                        </p>
                    </div>
                )
            })
             : <></>}
        </div>
        </div>
    )
}

export default FeauturedPage
