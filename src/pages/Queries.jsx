
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Queries = () => {
    const [allQueries, setAllQueries] = useState([]);
    const [message, setMessage] = useState(false);
    const [clickedCardId, setClickedCardId] = useState(null);

    useEffect(() => {
        const loadQueries = async () => {
            try {
                const response = await axios.get("https://capstone-final-backend-c01r.onrender.com/api/allquery");
                setAllQueries(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        loadQueries();
    }, []);

    const handleClick = (cardId) => {
        setClickedCardId(cardId);
        setMessage(true);
        setTimeout(() => {
            setMessage(false);
        }, 3000);
    };

    return (
        <div className='background'>
            <nav className="querie-navbar">
                <div className="navbar-container">
                    <div className="navbar-left">
                        <Link to="/" className="navbar-brand">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnXvw0NgERpqVXKRu47lCqqzLDsR8jgfVfg1ADWrBDkg&s" className='guvi' alt="Logo" />
                        </Link>
                    </div>
                    <div className="navbar-right">
                        <div className="navbar-subnav">
                            <Link to="/form">
                                <button className="btn-create-query">Create Query</button>
                            </Link>
                        </div>
                        <div className="navbar-search">
                            <input type="text" placeholder="Search..." />
                            <button className="btn-search">Search</button>
                        </div>
                    </div>
                </div>
            </nav>
            <div className='py-5'>
                <div className="container">
                    <div className='row justify-content-center'>
                        <div className='col-lg-8'>
                            <div className='row gy-4'>
                                {allQueries.map((query) => (
                                    <div key={query._id} className='col-md-6'>
                                        <div className='card'>
                                            <div className='card-body'>
                                                {clickedCardId === query._id && message && (
                                                    <div className="alert alert-success" role="alert">
                                                        Assigned to Mentor
                                                    </div>
                                                )}
                                                <button className='btn btn-primary' onClick={() => handleClick(query._id)}>Assign</button>
                                                <p className='option'>Topic: {query.option}</p>
                                                <p className='detail1'>Query Title: {query.detail1}</p>
                                                <p className='detail2'>Query Description: {query.detail2}</p>
                                                <p className='AvailableTime1'>Start time: {query.AvailableTime1}</p>
                                                <p className='AvailableTime2'>End Time: {query.AvailableTime2}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Queries;
