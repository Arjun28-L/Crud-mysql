import React, { useState } from 'react';
import axios from 'axios';
import './CreateStudent.css';
import { useNavigate } from 'react-router-dom';

const CreateStudent = () => {
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const navigate = useNavigate();

    function HandleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:8081/create', { name, mail })
            .then(res => {
                console.log("Response:", res);
                navigate('/'); // Only navigate if the request is successful
            })
            .catch(err => {
                console.error("Error:", err);
                // Optionally, display an error message to the user
            });
    }

    return (
        <div className='Main-Container-1'>
            <div className='First-Div-1'>
                <form onSubmit={HandleSubmit}>
                    <h2>Add Student</h2>
                    <div className='inner-div1'>
                        <label htmlFor='name'>Name</label>
                        <input 
                            type='text' 
                            placeholder='Enter your Name' 
                            className='Form-Control' 
                            onChange={e => setName(e.target.value)} 
                        />
                    </div>
                    <div className='inner-div1'>
                        <label htmlFor='mail'>Email</label>
                        <input 
                            type='email' 
                            placeholder='Enter your Mail' 
                            className='Form-Control' 
                            onChange={e => setMail(e.target.value)} 
                        />
                    </div>
                    <button className='Butt-1'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default CreateStudent;
