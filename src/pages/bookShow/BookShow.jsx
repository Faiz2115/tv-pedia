import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './style.scss'
const BookShow = () => {
    document.title = `TV-Pedia - Book The Show`

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: ''
    })
    const [data, setData] = useState([])
    const { id } = useParams();
    const url = "https://api.tvmaze.com/shows/"
    const summary = data.summary?.replace(/(<([^>]+)>)/gi, "");
    const navigate = useNavigate();


    const handleInputChange = (event) => {
        const { name, value } = event.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem('userInfo', JSON.stringify(formData))
        navigate('/booked')

    };

    useEffect(() => {
        fetch(`${url}${id}`)
            .then((response) => response.json())
            .then((actualdata) => {
                setData(actualdata)
            })
    }, [])




    return (
        <section className="book-show-section">

            <form onSubmit={handleSubmit}>
                <div className="banner">
                    <h1>Book The Show</h1>
                </div>
                <div className="title">
                    <label>Name: </label>
                    <h2>{data.name}</h2>
                </div>
                <div className="summary">
                    <label>Summary:</label>
                    <p>{summary}</p>
                </div>

                <div className="item">

                    <label>Name<span>*</span></label>
                    <div className="name-item">
                        <input
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />

                    </div>

                </div>

                <div className="item">
                    <div className="name-item">
                        <div>
                            <label>Email Address<span>*</span></label>
                            <input
                                id="address"
                                type="text"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required />
                        </div>
                        <div>
                            <label>Phone Number</label>
                            <input
                                id="number"
                                type="tel"
                                name="number"
                                placeholder="Contact Number"
                                value={formData.number}
                                onChange={handleInputChange}

                            />
                        </div>
                    </div>
                </div>
                <div className="btn-block">
                    <button type="submit" href="/">Book</button>
                </div>
            </form>

        </section>
    )
}

export default BookShow