import React, { useState, useEffect } from 'react'
import './style.scss'
import noPoster from '../../../assets/no-poster.png'
import { Link } from 'react-router-dom'
import DivLeft from '../../../components/DivAnimation/DivLeft'
const TVshows = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
            .then((response) => response.json())
            .then((actualdata) => {
                setData(actualdata)
            })
    }, [])



    return (
        <section className='tv-section'>

            <div className="title">
                <h2>
                    Shows
                    <span>(First 10)</span>
                </h2>
            </div>
            <DivLeft className="row">
                {data.map((item, index) => {
                    const image = item?.show.image;
                    return (
                        <div className="card"
                            key={item?.show.id}
                        >
                            <h6 className="title">{item?.show.name}</h6>

                            <img src={image ? item?.show.image.original : noPoster} alt="poster" />

                            <div className="genres">
                                {
                                    item?.show.genres.map((i) => <span >{i}</span>)
                                }
                            </div>

                            <h6 className="rating">{item?.show.rating.average || "N/A"}</h6>

                            <Link to={`/details/${item?.show.id}`}>Details</Link>

                        </div>
                    )
                })}
            </DivLeft>
        </section>
    )
}

export default TVshows