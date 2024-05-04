import React, { useContext, useState } from 'react'
import { Button, Col, Container, Form, FormControl, InputGroup, Nav, Navbar, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext, MessageContext, TokenContext, UserContext, useNavigation } from '../AppContext'
import { FontAwesomeIcon, faHouse } from './../index'
import ScrollToScrollspy from './ScrollSpy'

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
        console.log('search value : ' + event.target.value);
        setSearchValue(event.target.value);
    }

    return (
        <Container fluid className='p-0' id='scrollspy' style={{ borderTop: '22px', borderColor: 'purple' }}>
            <ScrollToScrollspy />
            <Row className='w-100 bg-primary container-fluid m-0'>
                <Col sm={3} md={6} lg={12} className='d-flex justify-content-between container-fluid'>
                    <Navbar bg='primary' data-bs-theme='primary' className='d-flex flex-row' style={{ height: '80px' }}>
                        <Container>
                            <Navbar.Brand as={Link} to={'/'}><FontAwesomeIcon icon={faHouse} className='fs-1 fw-2' style={{ color: 'rgba(255, 120, 10)' }} /> <b className='fs-1 fw-1 text-dark' style={{ color: '' }}>mL</b></Navbar.Brand>
                            <span className='vr text-white fs-5 mx-1'></span>
                            <Form method='post' className='me-auto' onSubmit={(event) => submitQuery(event)}>
                                <Form.Group className='d-flex mx-auto gap-1'>
                                    <Navbar.Text title='Search' className='search'>
                                        <FormControl className='bg-white text-black' placeholder='search something...' name='searchBar' value={searchValue} onChange={(event) => handleChange(event)} />
                                    </Navbar.Text>
                                    <span className='vr text-white fs-5 mx-1 my-auto' />
                                    <Button className='btn btn-sm btn-secondary px-1 py-auto' style={{ height: '40px', marginTop: '7px' }}>Search</Button>
                                </Form.Group>
                            </Form>
                        </Container>
                    </Navbar>
                    <Navbar bg='primary' data-bs-theme='primary' className='d-flex flex-row-reverse' style={{ height: '80px' }}>
                        <Container>
                            <Navbar.Text className='me-auto text-light'>Signed in as <span className='vr text-white fs-6 mx-1 my-auto'></span> {userContext.username}</Navbar.Text>
                            <span className='vr text-white fs-5 mx-1 my-auto' />
                            <Navbar.Collapse><Button className='bg-danger-hover' onClick={()=>localStorage.removeItem('code')}>Sign out</Button></Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Col>
            </Row>
        </Container>
    )
}

export default Header