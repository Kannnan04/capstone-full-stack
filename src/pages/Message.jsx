// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Message.css';

const Message = () => {
    const [githubUrl, setGithubUrl] = useState('');
    const [portfolioUrl, setPortfolioUrl] = useState('');
    const [resumeUrl, setResumeUrl] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent form from submitting normally
        if (githubUrl.trim() === '' || portfolioUrl.trim() === '' || resumeUrl.trim() === '') {
            setErrorMessage('All fields are required.');
        } else {
            setErrorMessage('');
            alert('Form submitted successfully!');

        }
    };

    return (
        <div className="container-fluid">
            <div className="row header">
                <div className="col">
                    <h1>Task Submissions</h1>
                </div>
                <div className="col user-info">
                    <h1>Kannan Siva</h1>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-md-6">
                    <form id="submissionForm" onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="githubUrl" className="form-label">GitHub URL</label>
                            <input
                                type="url"
                                className="form-control"
                                id="githubUrl"
                                placeholder="Enter GitHub URL"
                                value={githubUrl}
                                onChange={(e) => setGithubUrl(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="portfolioUrl" className="form-label">Portfolio URL</label>
                            <input
                                type="url"
                                className="form-control"
                                id="portfolioUrl"
                                placeholder="Enter Portfolio URL"
                                value={portfolioUrl}
                                onChange={(e) => setPortfolioUrl(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="resumeUrl" className="form-label">Resume URL</label>
                            <input
                                type="url"
                                className="form-control"
                                id="resumeUrl"
                                placeholder="Enter Resume URL"
                                value={resumeUrl}
                                onChange={(e) => setResumeUrl(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        {errorMessage && <p className="error-message text-danger mt-2">{errorMessage}</p>}
                    </form>
                    <p className="text-muted mt-3 note">Note: You won't be able to submit when the portfolio is under review or reviewed.</p>
                </div>
                <div className="col-md-6">
                    <div className="card card-custom">
                        <div className="card-body">
                            <h5 className="card-title">Portfolio Review</h5>
                            <p>Status: <span className="text-muted">Not Submitted</span></p>
                            <p>Batch: <span className="text-muted">Not Submitted</span></p>
                            <p>Reviewed By: <span className="text-muted">Not Submitted</span></p>
                            <p>Comment: <span className="text-muted">-</span></p>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Message;
