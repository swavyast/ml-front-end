import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext, MessageContext, TokenContext, UserContext } from '../AppContext'

const Header = () => {
    return (
        <div>
            <AuthContext.Consumer>
                {
                    (authContext) => (
                        <TokenContext.Consumer>
                            {
                                (tokenContext) => (
                                    <MessageContext.Consumer>
                                        {
                                            (messageContext) => (
                                                <UserContext.Consumer>
                                                    {
                                                        (userContext) => (
                                                            <Navbar bg='dark' data-bs-theme='dark' style={{ height: '80px' }}>
                                                                <Container>
                                                                    <Navbar.Brand as={Link} to={'/'} className='fs-1 fw-1'>mL</Navbar.Brand>
                                                                    <Navbar.Text>Signed in as : {userContext.username}</Navbar.Text>
                                                                </Container>
                                                            </Navbar>
                                                        )
                                                    }
                                                </UserContext.Consumer>
                                            )
                                        }
                                    </MessageContext.Consumer>
                                )
                            }
                        </TokenContext.Consumer>
                    )
                }
            </AuthContext.Consumer>
        </div>
    )
}

export default Header