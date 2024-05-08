import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Card, Container } from 'react-bootstrap';
import { NetworkContext } from '../AppContext';


const NetworkError = () => {

    const { networkStatus } = useContext(NetworkContext);

    const renderNetworkStatus = () => {
        if ((networkStatus.messageString !== '')) {
            return (
                <Container className='bg-dark border border-dark p-0' style={{zIndex:'1000'}}>
                    <Card className='bg-secondary d-flex flex-column'>
                        <Card.Header className='bg-dark text-white text-center'>Network Status</Card.Header>
                        <Card.Body style={{ minHeight: '250px', marginTop: '170px' }}>
                            <center className={(networkStatus.status)?'w-50 mx-auto bg-danger text-white text-center':'w-50 mx-auto bg-success text-white text-center'}>{networkStatus.messageString}</center>
                        </Card.Body>
                    </Card>
                </Container>
            );
        }
    };

    return <>{renderNetworkStatus()}</>
};

NetworkError.propTypes = {
    networkStatus: PropTypes.shape(
        {
            status: PropTypes.bool,
            errorText: PropTypes.string,
            messageString: PropTypes.string
        }
    )
};

export default NetworkError;