import React, { useState, useEffect } from 'react'
import noPoster from '../../assets/no-poster.png'
import { useParams, Link } from 'react-router-dom'
import './style.scss'

const Detail = () => {

    const { id } = useParams();
    const [data, setData] = useState([])
    const url = "https://api.tvmaze.com/shows/"
    useEffect(() => {
        fetch(`${url}${id}`)
            .then((response) => response.json())
            .then((actualdata) => {
                setData(actualdata)
            })
    }, [])
    const image = data?.image;

    const summary = data.summary?.replace(/(<([^>]+)>)/gi, "");

    document.title = `TV-Pedia - ${data.name}`
    return (
        <section className="details-section">
            <div className="image">
                <img src={image ? data?.image.original : noPoster} alt="poster" />
            </div>


            <div className="desc">

                <div>
                    <label>Name:</label>
                    <h2 className='name'>
                        {data.name}
                    </h2>
                </div>

                <div>
                    <label>Language:</label>
                    <h3 className='language'>{data.language}</h3>
                </div>

                <div className='genres'>
                    <label>Genres:</label>
                    {data.genres?.map((i) => <span
                        key={data.id}>{i}</span>)}
                </div>

                <div>
                    <label>Runtime:</label>
                    <h6 className='runtime'>
                        {data.runtime} mins
                    </h6>
                </div>

                <div >
                    <label>Pilot Episode:</label>
                    <h6 className="runtime">{data.premiered}</h6>
                </div>

                <div>
                    <label>Rating:</label>
                    <h6 className="rating">{data.rating?.average || "N/A"}</h6>
                </div>

                <div>
                    <Link to={`/bookshow/${data.id}`} className='book'>
                        Book This Show
                    </Link>
                </div>

            </div>

            <div className="summary">
                <label>Summary:</label>
                <p>{summary}</p>
            </div>
        </section>
    )
}

export default Detail