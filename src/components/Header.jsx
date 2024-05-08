import React, { useContext, useEffect, useState } from 'react'
import { Button, Col, Container, Form, FormControl, InputGroup, Modal, Nav, Navbar, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext, MessageContext, TokenContext, UserContext, useNavigation } from '../AppContext'
import { FontAwesomeIcon, faHouse } from './../index'
import ScrollToScrollspy from './ScrollSpy'
import Login from './Login'
import LoginPage from './LoginPage'
import RegistrationPage from './RegistrationPage'

const Header = () => {

    const authContext = useContext(AuthContext);
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
        console.log('search value : ' + event.target.value);
        setSearchValue(event.target.value);
    }

    useEffect(() => {
        console.log('useEffect inside Header.jsx before client id and secret is printed')
        console.log(process.env.REACT_APP_GITHUB_CLIENT_ID)
        console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET)

        console.log('code params from localStorage : ', localStorage.getItem('code'))
        console.log('accessToken from localStorage : ', localStorage.getItem('accessToken'))
    });

    const modalHandler = (event) => {
        event.preventDefault();

        return <Modal>
            <Modal.Header>Login</Modal.Header>
            <Modal.Body><LoginPage /></Modal.Body>
        </Modal>

    }

    return (
        <Container fluid className='p-0 shadow-sm' id='scrollspy'>
            <ScrollToScrollspy />
            <Row className='w-100 container-fluid m-0'>
                <Col sm={3} md={6} lg={12} className='d-flex justify-content-between container-fluid'>
                    <Navbar className='d-flex flex-row navbar-transparent'>
                        <Container>
                            <Navbar.Brand as={Link} to={'/'}><FontAwesomeIcon icon={faHouse} className='fs-1 fw-2 logo-house-icon' /> <b className='fs-1 fw-1 text-dark'>mL</b></Navbar.Brand>
                            <Form method='post' className='me-auto' onSubmit={(event) => submitQuery(event)}>
                                <Form.Group className='d-flex mx-auto gap-1'>
                                    <Navbar.Text title='Search' className='search'>
                                        <FormControl className='bg-white text-black' placeholder='search something...' name='searchBar' value={searchValue} onChange={(event) => handleChange(event)} />
                                    </Navbar.Text>
                                    <Button className='search-button'>Search</Button>
                                </Form.Group>
                            </Form>
                        </Container>
                    </Navbar>
                    <Navbar className='d-flex flex-row-reverse navbar-transparent' style={{ height: '80px' }}>
                        <Container>
                            <Navbar.Text className='me-auto text-dark'>Signed in as <span className='vr text-white fs-6 mx-1 my-auto'></span> {userContext.username}</Navbar.Text>
                            <Navbar.Collapse><Button className='log-in-out bg-danger-hover' onClick={(event) => modalHandler(event)}>{authContext.isAuthenticated ? 'Sign Out' : 'Sign In'}</Button></Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Col>
            </Row>
        </Container>
    )
}

export default Header