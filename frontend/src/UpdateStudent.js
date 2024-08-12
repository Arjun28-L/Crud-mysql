import React, { useState } from 'react';
import axios from 'axios';
import './CreateStudent.css';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateStudent = () => {
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const {id}=useParams();
    const navigate = useNavigate();

    function HandleSubmit(event) {
        event.preventDefault();
        axios.put('http://localhost:8081/update/'+id, { name, mail })
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
                    <h2>Update Student </h2>
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
                    <button className='Butt-1'>Update</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateStudent;
