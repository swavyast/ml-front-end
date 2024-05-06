import React, { useState } from 'react'
import {FaUser, FaLock} from '../index';

const LoginPage = () => {

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const changeHandler = (event) => {
    event.preventDefault();
    const {name, value} = event.target;
    setFormData(
      {
        ...formData,
        [name] : value
      }
    );
    console.log(formData);
  }
  const submitHandler = (event) => {
    event.preventDefault();
  }


  return (
    <div className="wrapper">
      <div className='form-wrapper login-form'>
        <form action={submitHandler} method='post'>
          <h1>Login</h1>
          <div className='input-box'>
            <input type='text' name='username' placeholder='username' value={formData.username} onChange={changeHandler} required />
            <FaUser className='icon' />
          </div>
          <div className='input-box'>
            <input type='password' name='password' placeholder='password' value={formData.password} onChange={changeHandler} required />
            <FaLock className='icon' />
          </div>
          <div className='rememberMe'>
            <label><input type='checkbox' />Remember me</label>
            <a href='/forgot-password'>Forgot Password ?</a>
          </div>
          <button type='submit'>Login</button>
          <div className='registration-link'>
            <p>Don't have an account yet ? <a href='/register'>Register</a></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage;