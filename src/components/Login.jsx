import React, { useContext, useState } from 'react'
import { AuthContext, LoginFormContext, MessageContext, TokenContext, UserContext, useNavigation } from '../AppContext';
import { Button, Container, Form, InputGroup, Modal, Popover } from 'react-bootstrap';
import { FormToggle } from '../AppContext';
import { ToggleMe } from './Home';

const Login = ({ toggle, setToggle }) => {
    const authContext = useContext(AuthContext);
    const tokenContext = useContext(TokenContext);
    const messageContext = useContext(MessageContext);
    const userContext = useContext(UserContext);
    const navigate = useNavigation();

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const [error, setError] = useState(
        {
            username: '',
            password: ''
        }
    );

    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });


        if (name === 'username') {
            const msg = validateUsername(value);

            setError({ ...error, username: msg });

        } else if (name === 'password') {
            const msg = validatePassword(value);

            setError({ ...error, password: msg });
        }


        console.log('value of form data : ' + JSON.stringify(formData));
    }

    const validateUsername = () => {
        console.log('validateUsername called ....');
        let message = '';
        const usernameRegex = /^[a-zA-Z0-9]{8,19}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(formData.username) && !usernameRegex.test(formData.username)) {
            message = <div style={{ whiteSpace: 'preserve-spaces', marginTop: '-20px', marginBottom: '-20px' }}>
                <pre style={{ overflowX: 'hidden' }}>Username should be alphanumeric <br />and between 8 and 15 characters <br />long.</pre>
            </div>;
        }

        return message;
    }

    const validatePassword = () => {
        let message = '';
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(formData.password)) {
            message = <div style={{ whiteSpace: 'preserve-spaces', marginTop: '-20px' }}>
                <small>password should be - <br /><br /></small>
                <small>*        At least 8 characters long<br /></small>
                <small>*        Contains at least one uppercase letter<br /></small>
                <small>*        Contains at least one lowercase letter<br /></small>
                <small>*        Contains at least one number and<br /></small>
                <small>*        At least one special character</small>
            </div>
        }
        return message;
    }

    const resetFormData = (event) => {
        event.preventDefault();
        setFormData({
            username: '',
            password: ''
        })
        messageContext.setMessage('');
        setError(!error);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        checkInput(event);
        navigate('/');
    }

    const checkInput = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target); // Get form data
        const username = formData.get('username'); // Get value of username input
        const password = formData.get('password'); // Get value of password input
    
        console.log('Username:', username);
        console.log('Password:', password);
    
        if (!username) {
            setTimeout(()=>{setError({ ...error, username: 'Username cannot be empty' })}, 500);
        }
        if (!password) {
            setTimeout(()=>{setError({ ...error, password: 'Password cannot be empty' })}, 1800);
        }
        resetError();
    }

    const resetError = () => {
        setTimeout(() => {
            setError({ username: '', password : ''});
        }, 5000);
       
    };
    
    return (
        <div className='py-auto' style={{ minHeight: '550px', marginTop: '100px' }}>
            <div id='formDiv' style={{ position: 'relative' }}>
                <Container>
                    <Form method='post' className='form-bg d-flex flex-column text-black mx-auto shadow-lg w-50' onSubmit={(event) => submitHandler(event)}>
                        <Form.Text className=''><center className='fs-4 mb-4 text-white'>Login</center></Form.Text>
                        <Form.Group className='d-flex flex-row mx-auto w-75'>
                            <Form.Label htmlFor='username' className='my-auto' style={{ marginRight: '25px' }}>Email/Username</Form.Label>
                            <Form.Control
                                className='mb-1'
                                name='username'
                                value={formData.username}
                                onChange={handleChange}
                                placeholder='email/username'
                                style={{ width: '250px', height: '60px' }}
                            />

                        </Form.Group>
                        <Form.Group className='d-flex flex-row mx-auto w-75'>
                            <Form.Label htmlFor='password' className='my-auto' style={{ marginRight: '75px' }}>Password</Form.Label>
                            <Form.Control
                                className='m1-1'
                                name='password'
                                value={formData.password}
                                onChange={handleChange}
                                placeholder='password'
                                style={{ width: '250px', height: '60px' }}
                            />

                        </Form.Group>
                        <Form.Group className='d-flex flex-row gap-2 my-4 mx-auto'>
                            <Button type='submit' className='btn btn-success'>Login</Button>
                            <Button type='submit' className='btn btn-secondary' onClick={resetFormData}>Reset</Button>
                        </Form.Group>
                        <Form.Text className='bg-light py-1 ms-auto mb-3 px-2' style={{ width: '220px' }}>Not registered yet ? <b className='text-primary px-2' role='button' onClick={() => (setToggle(!toggle))}>Register</b></Form.Text>
                    </Form>
                </Container>
            </div>
            <div id="responseDiv" style={{ position: 'absolute', marginTop: '-17%', marginLeft: '61%' }}>

                {
                    error.username && (
                        <span className="text-danger">{error.username}</span>
                    )
                }

                {
                    error.password && (<Popover>
                        <Popover.Body>
                            <span className="text-danger">{error.password}</span>
                        </Popover.Body>
                    </Popover>)
                }
            </div>
        </div>
    )
}

export default Login