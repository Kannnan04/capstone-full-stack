import React from 'react';
import { useState } from 'react';
import "./Form.css"
import { useNavigate } from 'react-router-dom';
import axios from 'axios'


const Form = () => {

    const [option, setOption] = useState('')
    const [option1, setOption1] = useState('')
    const [option2, setOption2] = useState('')
    const [detail1, setDetail1] = useState('')
    const [detail2, setDetail2] = useState('')
    const [AvailableTime1, setAvailableTime1] = useState('')
    const [AvailableTime2, setAvailableTime2] = useState('')
    const [response, setResponseMsg] = useState('')
    const [file, setFile] = useState(null);

    const navigate = useNavigate();

    const handleCancel = () => {           // input field empty
        setDetail1('');
        setDetail2('');
        setAvailableTime1('');
        setAvailableTime2('');
        setOption('');
        setOption1('');
        setOption2('');
    };



    const handleSubmit = async (e) => {
        e.preventDefault()


        const payloads = { option, option1, option2, detail1, detail2, AvailableTime1, AvailableTime2 }


        await axios.post('https://capstone-final-backend-c01r.onrender.com/api/newquery', payloads)
            .then((res) => {
                setResponseMsg(res.data.message)
                navigate('/queries')
            })
            .catch((err) => {
                console.log(err);
            })

    }


    const handleFileChange = (event) => {

        const selectedFile = event.target.files[0];
        setFile(selectedFile);
    };




    const history = useNavigate();
    const handle = () => {
        history('/queries'); e
    };


    return (

        <div className="Form">
            <div>

                <button onClick={handle} className='back-btn'>Go Back</button>
            </div>
            <br></br>

            <h1>Form with Dropdowns</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="topic">Topic:</label>
                    <select value={option} onChange={(e) => setOption(e.target.value)} required>
                        <option value="" >Select an option</option>
                        <option> Zen class</option>
                        <option> Placement</option>
                        <option> Pre-Placement</option>
                        <option> Doubt Class</option>
                        <option> BootCamp</option>
                    </select>

                </div>
                <div className="form-group">
                    <label htmlFor="topic">Subcategory</label>
                    <select value={option1} onChange={(e) => setOption1(e.target.value)} required>
                        <option value="">Select an option</option>
                        <option >Task</option>
                        <option>WebCode</option>
                        <option>Class Topic</option>
                        <option>WebKata</option>
                        <option>CodeKata</option>
                        <option>Assessment</option>
                    </select>

                </div>

                <div className="form-group">
                    <label htmlFor="topic">Subcategory</label>
                    <select value={option2} onChange={(e) => setOption2(e.target.value)} required>
                        <option value="">Select an option</option>
                        <option>English</option>
                        <option>Tamil</option>
                        <option>Hindi</option>

                    </select>

                </div>
                <div className="form-group">
                    <label htmlFor="category">Details</label>
                    <div>
                        <label className='heading'>Query Title <input type='text' placeholder='Enter the query title' value={detail1} onChange={(e) => setDetail1(e.target.value)} required /> </label>

                    </div>
                    <div>
                        <label className='heading'>Query Description  <input type='text' placeholder='Enter the Description ' value={detail2} onChange={(e) => setDetail2(e.target.value)} required />  </label>

                    </div>


                </div>
                <div className="form-group">
                    <label htmlFor="detail">Your available Time ? ( Ours : 9:00 AM - 7:00 PM )</label>
                    <div>
                        <label className='heading'>From <input type='text' placeholder='09.00' value={AvailableTime1} onChange={(e) => setAvailableTime1(e.target.value)} required />  </label>

                    </div>
                    <div>
                        <label className='heading'>Till <input type='text' placeholder='19.00' value={AvailableTime2} onChange={(e) => setAvailableTime2(e.target.value)} required />  </label>

                    </div>

                </div>
                <div className='Upload Form'>
                    <label htmlFor="fileInput">Choose File:</label>
                    <input
                        type="file"
                        onChange={handleFileChange}
                        accept=".pdf, .doc, .docx, .txt"
                    />
                </div>
                <br></br>
                <div className="button-group">
                    <button type="button" onClick={handleCancel} className='cancel-btn'>Cancel</button>
                    <button type="submit" className='sub-btn'>Create</button>
                </div>
            </form>
            <h1>{response}</h1>

        </div>
    );

}

export default Form;