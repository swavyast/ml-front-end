import React from 'react';
import PropTypes from 'prop-types';
import { Card, Container } from 'react-bootstrap';
import Register from './Register';
import Login from './Login';

const NetworkError = ({ networkStatus, toggle, setToggle }) => {

    const renderNetworkStatus = () => {
        if (networkStatus.status) {
            return (
                <Container className='bg-dark border border-dark p-0'>
                    <Card className='bg-secondary d-flex flex-column'>
                        <Card.Header className='bg-dark text-white text-center'>Network Status</Card.Header>
                        <Card.Body style={{ minHeight: '250px', marginTop: '170px' }}>
                            <center className='w-50 mx-auto bg-danger text-white text-center'>{networkStatus.errorText}</center>
                        </Card.Body>
                    </Card>
                </Container>
            );
        } else if (networkStatus.messageString !== '') {
            return (
                <Container className='bg-dark border border-dark p-0'>
                    <Card className='bg-secondary d-flex flex-column'>
                        <Card.Header className='bg-dark text-white text-center'>Network Status</Card.Header>
                        <Card.Body style={{ minHeight: '250px', marginTop: '170px' }}>
                            <center className='w-50 mx-auto bg-success text-white text-center'>{networkStatus.messageString}</center>
                        </Card.Body>
                    </Card>
                </Container>
            );
        } else {
            return (toggle ? (
                <Register toggle={toggle} setToggle={setToggle} />
            ) : (
                <Login toggle={toggle} setToggle={setToggle} />
            ))
        }
    };

    return <div>{renderNetworkStatus()}</div>;
};

NetworkError.propTypes = {
    networkStatus: PropTypes.shape(
        {
            status: PropTypes.bool,
            errorText: PropTypes.string,
            messageString: PropTypes.string
        }
    ),
    toggle: PropTypes.bool,
    setToggle: PropTypes.func
};

export default NetworkError;