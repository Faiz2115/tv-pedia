import React, { useState, useEffect } from 'react'
import './style.scss'
import noPoster from '../../assets/no-poster.png'
import { Link } from 'react-router-dom'
import DivUp from '../../components/DivAnimation/DivUp'
const AllShows = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.tvmaze.com/shows')
            .then((response) => response.json())
            .then((actualdata) => {
                setData(actualdata)
            })
    }, [])

    document.title = `TV-Pedia - All Shows`


    return (
        <section className='all-section'>

            <div className="title">
                <h2>All Shows</h2>
            </div>
            <DivUp className="row">

                {data.map((item, index) => {
                    const image = item?.image;
                    return (
                        <>

                            <div className="card"
                                key={item?.id}
                            >
                                <h6 className="title">{item?.name}</h6>

                                <img src={image ? item?.image.original : noPoster} alt="poster" />

                                <div className="genres">
                                    {
                                        item?.genres.map((i) => <span>{i}</span>)
                                    }
                                </div>

                                <h6 className="rating">{item?.rating.average || "N/A"}</h6>

                                <Link to={`/details/${item?.id}`}>Details</Link>

                            </div>
                        </>
                    )
                })}
            </DivUp>


        </section>
    )
}

export default AllShows