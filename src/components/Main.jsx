import React, { useState } from 'react'
import RegistrationPage from './RegistrationPage';
import LoginPage from './LoginPage';

const Main = () => {

    const [formToggle, setFormToggle] = useState(false);

  return (
    <div id='parent-div'>
        {/* <img src='./image/blueleafs.png' alt='div-img' width={100} height={100} loading='eager' /> */}
    {
        formToggle ?
        <RegistrationPage formToggle={formToggle} setFormToggle={setFormToggle} />
        :
        <LoginPage formToggle={formToggle} setFormToggle={setFormToggle} />
    }
    </div>
  )
}

export default Main