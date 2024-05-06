import React, { useState } from 'react'
import { CgGenderFemale, CgGenderMale, FaLock, FaUser } from '../index';

const RegistrationPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        gender: ['Male', 'Female', 'Others'],
    });

    const changeHandler = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setFormData(
            {
                ...formData,
                [name]: value
            }
        );
        console.log(formData);
    }
    const submitHandler = (event) => {
        event.preventDefault();
    }

    return (
        <div className="wrapper">
            <div className='form-wrapper'>
                <form action={submitHandler} method='post'>
                    <h1>Register</h1>
                    <div className='input-box'>
                        <input type='text' name='username' placeholder='username/email' value={formData.username} onChange={changeHandler} required />
                        <FaUser className='icon' />
                    </div>
                    <div className='input-box'>
                        <input type='password' name='password' placeholder='password' value={formData.password} onChange={changeHandler} required />
                        <FaLock className='icon' />
                    </div>
                    <div className='gender'>
                        <label htmlFor='gender'>Gender</label>
                        <div id="gender">
                            <input id='male' name='gender' type='radio' value='Male' onChange={changeHandler} /> Male <CgGenderMale className='icon' />
                            <input id='female' name='gender' type='radio' value='Female' onChange={changeHandler} /> Female <CgGenderFemale className='icon' />
                            <input id='others' name='gender' type='radio' value='Others' onChange={changeHandler} /> Others
                        </div>
                    </div>
                    <div id="dob">
                        <label htmlFor='dob'>Date Of Birth</label>
                        <input type="date" name='dob' required />
                    </div>
                    <button type='submit'>Register</button>
                    <div className='registration-link'>
                        <p>Registered already?<a href='/login'>Login</a></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegistrationPage