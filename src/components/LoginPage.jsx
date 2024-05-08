import React, { useContext, useState } from 'react';
import { FaUser, FaLock } from '../index';
import { ErrorContext } from '../AppContext';
import { Link } from 'react-router-dom';

const LoginPage = ({ formToggle, setFormToggle }) => {

  const { error, setError } = useContext(ErrorContext);

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const changeHandler = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData(prevFormData =>
    ({
      ...prevFormData,
      [name]: value
    }));

    console.log(formData);
  }
  const submitHandler = (event) => {
    const { username, password } = formData;
    const newErrors = [];
    event.preventDefault();
    console.log('Form element:', username);

    if (username.trim() === '') {
      console.error('when username is empty');
      newErrors.push({
        code: '000',
        message: 'Username cannot be empty.'
      });
    }
    if (password.trim() === '') {
      console.error('when password is empty');
      newErrors.push({
        code: '001',
        message: 'Password cannot be empty.'
      });
    }
    setError(newErrors);
  }

  const resetErrors = (event) => {
    event.preventDefault();
    const { name } = event.target;
    if (error) {
      let code;
      switch (name) {
        case 'username':
          code = '000'
          break;
        case 'password':
          code = '001';
          break;
        default:
          code = null;
      }
      if (code !== null) {
        setError(prevErrors => prevErrors.filter(error => error.code !== code))
      }
    }
  }


  console.log(error, 'error object in loginPage');

  return (
    <div className="wrapper">
      <div className='form-wrapper login-form'>
        <form onSubmit={(event) => submitHandler(event)} method='post'>
          <h1>Sign in</h1>
          <div className='input-box'>
            <input type='text' name='username' placeholder='username' value={formData.username} onChange={changeHandler} onFocus={(event) => resetErrors(event)} />
            <FaUser className='icon' />
            {error.map((err, index) => (
              <span key={index} className='error'>
                {err.code === '000' && `${err.code}: ${err.message}`}
              </span>
            ))}
          </div>
          <div className='input-box'>
            <input type='password' name='password' placeholder='password' value={formData.password} onChange={changeHandler} onFocus={(event) => resetErrors(event)} />
            <FaLock className='icon' />
            {error.map((err, index) => (
              <span key={index} className='error'>
                {err.code === '001' && `${err.code}: ${err.message}`}
              </span>
            ))}
          </div>
          <div className='rememberMe'>
            <label><input type='checkbox' />Remember me</label>
            <Link to='/forgot-password'>Forgot Password ?</Link>
          </div>
          <button type='submit'>Sign in</button>
          <div className='register-login-toggle'>
            <p>Don't have an account yet ? <button type='button' onClick={() => setFormToggle(!formToggle)}>Sign up</button></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage;