// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Teams.css'

const Teams = () => {
    return (
        <div className="container-fluid">
            <div className="row header">
                <div className="col">
                    <h1>Capstone</h1>
                </div>
                <div className="col user-info">
                    <h1>Kannan Siva</h1>
                </div>
            </div>
            <div className="row main-content">

                <div className="col content">
                    <div className="task-submission">
                        <h2 className="task-title"><b>Kannan Siva</b>(FSD55WD-T: Capstone Project)
                            Zen Class Ticketing system for query resolving</h2>
                        <div className="task-meta">
                            <span className="submission-date">submitted on May 3rd 2024, 3:30 pm</span>

                            <div className="button-container">
                                <button className="btn">3</button>
                                <button className="btn">Capstone</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Teams;