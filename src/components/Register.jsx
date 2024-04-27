import React, { useContext, useState } from 'react'
import { AuthContext, MessageContext, TokenContext, UserContext, useNavigation } from '../AppContext';
import { Button, Container, Form, InputGroup, Popover } from 'react-bootstrap';

const Register = ({ toggle, setToggle }) => {
    const authContext = useContext(AuthContext);
    const tokenContext = useContext(TokenContext);
    const messageContext = useContext(MessageContext);
    const userContext = useContext(UserContext);
    const navigate = useNavigation();


    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        username: '',
        password: ''
    })

    const [error, setError] = useState(
        {
            email: '',
            phone: '',
            username: '',
            password: ''
        }
    );

    const [info, setInfo] = useState(
        {
            email: '',
            phone: '',
            username: '',
            password: ''
        }
    );

    const validateEmail = () => {
        console.log('validateEmail called ....');
        let message = '';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            message = <div>
                <pre style={{ whiteSpace: 'preserve-spaces' }}>
                    email should be alphanumeric and contain at least one @ symbol.
                </pre>
            </div>
        }
        return message;
    }


    const validatePhone = () => {
        console.log('validatePhone called ....');
        let message = '';
        const phoneRegex = /^\+?[0-9]{1,3}-?[0-9]{10}/; //or /^\+?\d{1,3}-?\d{10}$/;
        if (!phoneRegex.test(formData.phone)) {
            message = <div>
                <pre style={{ whiteSpace: 'preserve-spaces' }}>
                    Phone should be either numeric or be in format : <br />+(country code)-0000000000 only.
                </pre>
            </div>
        }
        return message;
    }

    const validateUsername = () => {
        console.log('validateUsername called ....');
        let message = '';
        const usernameRegex = /^[a-zA-Z0-9]{8,19}$/; // or /^[.\w&&[^_]]{8, 40}$/
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

    const handleInput = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let maxLength = event.target.getAttribute('maxLength');
        let currLength = value.length;
        if (name === 'email') {
            while (currLength <= maxLength) {
                setInfo({ ...info, email: (maxLength - currLength) + ' characters remaining' });
            }
        }
    }

    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });


        if (name === 'email') {
            const msg = validateEmail(value);

            setError({ ...error, email: msg });

        } else if (name === 'phone') {
            const msg = validatePhone(value);
            const maxLen = event.target.getAttribute('maxLength');
            if (value.length > maxLen) {
                setError({ ...error, phone: 'length exceeded the maximum limit' });
            }
            setError({ ...error, phone: msg });

        } else if (name === 'username') {
            const msg = validateUsername(value);

            setError({ ...error, username: msg });

        } else if (name === 'password') {
            const msg = validatePassword(value);

            setError({ ...error, password: msg });
        }

        console.log('value of form data : ' + JSON.stringify(formData));
    }

    const resetFormData = (event) => {
        event.preventDefault();
        setFormData({
            email: '',
            phone: '',
            username: '',
            password: ''
        })

        messageContext.setMessage('');
        setError(!error);
        navigate(prev => prev);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        navigate('/');
    }

    return (
        <div className='py-auto' style={{ minHeight: '550px', marginTop:'-10px'}}> 
            <div id='formDiv' style={{ position: 'relative' }}>
                <Container className='mt-5'>
                    <Form method='post' className='input-form-bg d-flex flex-column text-black mx-auto shadow-lg w-50' onSubmit={(event) => submitHandler(event)}>
                        <Form.Text className=''><center className='fs-4 mb-4 text-white'>Register</center></Form.Text>
                        <Form.Group className='d-flex flex-row mx-auto w-75'>
                            <Form.Label htmlFor='email' className='my-auto' style={{ marginRight: '82px' }}>Email</Form.Label>
                            <Form.Control
                                className='mb-1'
                                id='email'
                                name='email'
                                value={formData.email}
                                onInput={handleInput}
                                onChange={handleChange}
                                maxLength={50}
                                placeholder='email'
                                style={{ width: '250px', height: '60px' }}
                            />
                        </Form.Group>
                        <Form.Group className='d-flex flex-row mx-auto w-75'>
                            <Form.Label htmlFor='phone' className='my-auto' style={{ marginRight: '75px' }}>Phone</Form.Label>
                            <Form.Control
                                className=''
                                id='phone'
                                name='phone'
                                value={formData.phone}
                                onInput={handleInput}
                                onChange={handleChange}
                                maxLength={14}
                                placeholder='phone'
                                style={{ width: '250px', height: '60px' }}
                            />
                        </Form.Group>
                        <Form.Group className='d-flex flex-row mx-auto w-75'>
                            <Form.Label htmlFor='username' className='my-auto' style={{ marginRight: '50px' }}>Username</Form.Label>
                            <Form.Control
                                className='mb-1 mt-1'
                                id='username'
                                name='username'
                                value={formData.username}
                                onInput={handleInput}
                                onChange={handleChange}
                                maxLength={20}
                                placeholder='username'
                                style={{ width: '250px', height: '60px' }}
                            />
                        </Form.Group>
                        <Form.Group className='d-flex flex-row mx-auto w-75'>
                            <Form.Label htmlFor='password' className='my-auto' style={{ marginRight: '55px' }}>Password</Form.Label>
                            <Form.Control
                                className='mb-1'
                                id='password'
                                name='password'
                                value={formData.password}
                                onInput={handleInput}
                                onChange={handleChange}
                                maxLength={20}
                                placeholder='password'
                                style={{ width: '250px', height: '60px' }}
                            />
                        </Form.Group>
                        <Form.Group className='d-flex flex-row gap-2 my-4 mx-auto'>
                            <Button type='submit' className='btn btn-success'>Register</Button>
                            <Button type='submit' className='btn btn-secondary' onClick={resetFormData}>Reset</Button>
                        </Form.Group>
                        <Form.Text className='bg-light py-1 ms-auto mb-3 px-2' style={{width:'220px'}}>Registered already ? <b className='text-primary px-2' role='button' onClick={() => (setToggle(!toggle))}>Login</b></Form.Text>
                    </Form>
                </Container>
            </div>
            <div id="responseDiv" style={{ position: 'absolute', marginTop: '-27%', marginLeft: '61%' }}>
                {
                    error.phone && (
                        <Popover>
                            <Popover.Body>
                                {error.phone && <span className="text-danger">{error.phone}</span>}
                            </Popover.Body>
                        </Popover>
                    )
                }
                {
                    info.phone && (
                        <Popover>
                            <Popover.Body>
                                {info.phone && <span className="text-danger">{info.phone}</span>}
                            </Popover.Body>
                        </Popover>
                    )
                }
                {
                    error.email && (
                        <Popover>
                            <Popover.Body>
                                <span className="text-danger">{error.email}</span>
                            </Popover.Body>
                        </Popover>
                    )
                }
                {
                    info.email && (
                        <Popover>
                            <Popover.Body>
                                <span className="text-danger">{info.email}</span>
                            </Popover.Body>
                        </Popover>
                    )
                }
                {
                    error.username && (
                        <Popover>
                            <Popover.Body>
                                {error.username && <span className="text-danger">{error.username}</span>}
                            </Popover.Body>
                        </Popover>
                    )
                }

                {
                    error.password && (<Popover>
                        <Popover.Body>
                            {error.password && <span className="text-danger">{error.password}</span>}
                        </Popover.Body>
                    </Popover>)
                }
            </div>
        </div>
    )
}

export default Register