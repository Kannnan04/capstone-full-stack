import React from 'react';
import './Teams.css'

const Teams = () => {
    return (
        <div class="container-fluid">
            <div class="row header">
                <div class="col">
                    <h1>Capstone</h1>
                </div>
                <div class="col user-info">
                    <h1>Kannan Siva</h1>
                </div>
            </div>
            <div class="row main-content">

                <div class="col content">
                    <div class="task-submission">
                        <h2 class="task-title"><b>Kannan Siva</b>(FSD55WD-T: Capstone Project)
                            Zen Class Ticketing system for query resolving</h2>
                        <div class="task-meta">
                            <span class="submission-date">submitted on May 3rd 2024, 3:30 pm</span>

                            <div class="button-container">
                                <button class="btn">3</button>
                                <button class="btn">Capstone</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Teams;