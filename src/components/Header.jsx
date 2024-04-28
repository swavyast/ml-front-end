import React, { useContext, useState } from 'react'
import { Button, Container, Form, FormControl, InputGroup, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext, MessageContext, TokenContext, UserContext, useNavigation } from '../AppContext'
import { FontAwesomeIcon, faHouse } from './../index'

const Header = () => {

    // const authContext = useContext(AuthContext);
    // const tokenContext = useContext(TokenContext);
    // const messageContext = useContext(MessageContext);
    const userContext = useContext(UserContext);
    const navigate = useNavigation();

    const [searchValue, setSearchValue] = useState('');

    const submitQuery = (event) => {
        event.preventDefault();
    }

    const handleChange = (event) => {
        event.preventDefault();
        console.log('search value : '+event.target.value);
        setSearchValue(event.target.value);
    }

    return (
        <div className='d-flex w-100 justify-content-between bg-primary'>
            <Navbar bg='primary' data-bs-theme='primary' className='d-flex flex-row' style={{ height: '80px'}}>
                <Container>
                    <Navbar.Brand as={Link} to={'/'}><FontAwesomeIcon icon={faHouse} className='fs-1 fw-2' style={{color:'rgba(255, 120, 10)'}} /> <b className='fs-1 fw-1 text-dark' style={{color:''}}>mL</b></Navbar.Brand>
                    <span className='vr text-white fs-5 mx-2'></span>
                    <Form method='post' className='me-auto' onSubmit={(event) => submitQuery(event)}>
                        <Form.Group className='d-flex mx-auto gap-2'>
                            <Navbar.Text title='Search' className='search'>
                                <FormControl className='bg-white text-black' placeholder='search something...' name='searchBar' value={searchValue} onChange={(event) => handleChange(event)} />
                            </Navbar.Text>
                            <span className='vr text-white fs-5 mx-2 my-auto'></span>
                            <Button className='btn btn-sm btn-secondary px-2 py-auto' style={{height:'40px', marginTop:'7px'}}>Search</Button>
                        </Form.Group>
                    </Form>
                </Container>
            </Navbar>
            <Navbar bg='primary' data-bs-theme='primary' className='d-flex flex-row-reverse' style={{ height: '80px' }}>
                <Container>
                    <Navbar.Text className='me-auto text-light'>Signed in as <span className='vr text-white fs-5 mx-2 my-auto'></span> {userContext.username}</Navbar.Text>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header