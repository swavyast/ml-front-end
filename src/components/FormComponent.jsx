import React, { useContext } from 'react'
import Register from './Register'
import Login from './Login'
import { FormToggleContext } from '../AppContext'

const FormComponent = () => {
    const {toggle, setToggle} = useContext(FormToggleContext);

    return (
        (toggle ? (
            <Register toggle={toggle} setToggle={setToggle} />
        ) : (
            <Login toggle={toggle} setToggle={setToggle} />
        ))
    )
}

export default FormComponent