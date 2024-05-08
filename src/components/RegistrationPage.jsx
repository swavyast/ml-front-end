import React, { useContext, useState } from 'react'
import { CgGenderFemale, CgGenderMale, FaLock, FaEnvelope, FaPhone } from '../index';
import { ErrorContext } from '../AppContext';
import { Link } from 'react-router-dom';

const RegistrationPage = ({formToggle, setFormToggle}) => {
    const { error, setError } = useContext(ErrorContext);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        phone: '',
        gender: [],
        dob: ''
    });

    const genderSwitch = (event) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            gender: event.target.value
        }));

        console.log(JSON.stringify(formData));

        if (error) {
            setError(prevErrors => (prevErrors.filter((error) => error.code !== '003')));
        }
    }

    const changeHandler = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setFormData(prevFormData =>
        ({
            ...prevFormData,
            [name]: value
        }));

        console.log(JSON.stringify(formData));
    }

    const resetErrors = (event)=>{
        event.preventDefault();
        const {name} = event.target;
        if (error) {
            console.log('errors exist')
            let errorCode;
            switch (name) {
                case 'email':
                    errorCode = '000';
                    break;
                case 'password':
                    errorCode = '001';
                    break;
                case 'phone':
                    errorCode = '002';
                    break;
                case 'dob':
                    errorCode = '004';
                    break;
                default:
                    errorCode = null;
            }

            // Filter out the error with the determined error code
            if (errorCode !== null) {
                setError(prevErrors => prevErrors.filter(error => error.code !== errorCode));
            }
        }
    }

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(formData);
        const { email, password, phone, gender, dob } = formData;
        console.log('email : ', email);
        console.log('email : ', email + '\n password : ', password + '\n phone : ', phone + '\n gender : ', gender + '\n Date of birth : ', dob);
        const newErrors = [];
        if (email.trim() === '') {
            newErrors.push({
                code: '000',
                message: 'email can not be empty'
            })
        }
        if (password.trim() === '') {
            newErrors.push({
                code: '001',
                message: 'password can not be empty'
            })
        }
        if (phone.trim() === '') {
            newErrors.push({
                code: '002',
                message: 'phone can not be empty'
            })
        }
        if (gender.length === 0) {
            newErrors.push({
                code: '003',
                message: 'Please select a gender'
            })
        }
        if (dob.trim() === '') {
            newErrors.push({
                code: '004',
                message: 'Date of birth can not be empty'
            })
        }
        setTimeout(() => (setError(newErrors)), 300)
    }


    console.log(error);

    return (
        <div className="wrapper">
            <div className='form-wrapper registration-form'>
                <form onSubmit={submitHandler} method='post'>
                    <h1>Sign up</h1>
                    {/* <button onClick={resetErrors} /> */}
                    <div className='input-box'>
                        <input type='email' name='email' placeholder='email' value={formData.email} onChange={changeHandler} onFocus={(event) => resetErrors(event)} />
                        <FaEnvelope className='icon' />
                        {error.map((err, index) => (<span className='error' key={index}>{err.code === '000' && `${err.code} : ${err.message}`}</span>))}
                    </div>
                    <div className='input-box'>
                        <input type='password' name='password' placeholder='password' value={formData.password} onChange={changeHandler} onFocus={(event) => resetErrors(event)} />
                        <FaLock className='icon' />
                        {error.map((err, index) => (<span className='error' key={index}>{err.code === '001' && `${err.code} : ${err.message}`}</span>))}
                    </div>
                    <div className='input-box'>
                        <input type='tel' name='phone' placeholder='phone' value={formData.phone} onChange={changeHandler} onFocus={(event) => resetErrors(event)} />
                        <FaPhone className='icon' />
                        {error.map((err, index) => (<span className='error' key={index}>{err.code === '002' && `${err.code} : ${err.message}`}</span>))}
                    </div>
                    {error.map((err, index) => (<span className='error align-err' key={index}>{err.code === '003' && `${err.code} : ${err.message}`}</span>))}
                    <div className='gender'>
                        <label htmlFor='gender'>Gender</label>
                        <div id="gender-group">
                            <input name='gender' type='radio' value='Male' onChange={(event) => { genderSwitch(event) }} /> <label>Male <CgGenderMale className='icon' /></label>
                            <input name='gender' type='radio' value='Female' onChange={(event) => { genderSwitch(event) }} /> <label>Female <CgGenderFemale className='icon' /></label>
                            <input name='gender' type='radio' value='Others' onChange={(event) => { genderSwitch(event) }} /> <label>Others</label>
                        </div>
                    </div>
                    <div id="dob">
                        <label htmlFor='dob'>Date Of Birth</label>
                        {error.map((err, index) => (<span className='error align-err' key={index}>{err.code === '004' && `${err.code} : ${err.message}`}</span>))}
                        <input type="date" name='dob' value={formData.dob} onChange={changeHandler} onFocus={(event) => resetErrors(event)} />
                    </div>
                    <button type='submit'>Sign up</button>
                    <div className='register-login-toggle'>
                        <p>Registered already?<button type='button' onClick={()=>setFormToggle(!formToggle)}>Sign in</button></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegistrationPage