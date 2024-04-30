import React, { useContext, useEffect, useState } from 'react'
import { AuthContext, MessageContext, TokenContext, UserContext, useNavigation } from '../AppContext'
import Login from './Login';
import Register from './Register';
import NetworkError from './NetworkError';
import { Col, Container, Row } from 'react-bootstrap';

const Home = () => {

  const authContext = useContext(AuthContext);
  const tokenContext = useContext(TokenContext);
  const messageContext = useContext(MessageContext);
  const userContext = useContext(UserContext);
  const navigate = useNavigation();
  const [toggle, setToggle] = useState(false);
  const [showForm, setShowForm] = useState(false);

  //just for debugging

  useEffect(() => {
    userContext.setUsername('User');
  }, [userContext]);

  const [networkStatus, setNetworkStatus] = useState(
    {
      status: false,
      errorText: '',
      messageString: ''
    }
  );

  const resetNetworkError = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        setNetworkStatus({
          status: false,
          errorText: '',
          messageString: ''
        });
        resolve();
        setShowForm(true);
      }, 3000)
    });
  };

  useEffect(
    () => {
      const handleOnlineStatusChange = () => {
        if (!navigator.onLine) {
          setNetworkStatus({
            status: true,
            errorText: 'Oops! No Network',
            messageString: ''
          })
        } else {
          setNetworkStatus({
            status: false,
            errorText: '',
            messageString: 'Network status OK'
          })
          resetNetworkError();
        }
      };

      // Add event listener for online status changes
      window.addEventListener('online', handleOnlineStatusChange);
      window.addEventListener('offline', handleOnlineStatusChange);

      // Cleanup: remove event listeners when component unmounts
      return () => {
        window.removeEventListener('online', handleOnlineStatusChange);
        window.removeEventListener('offline', handleOnlineStatusChange);
      };
    }, []);

  return <Container fluid className='p-0'>
    <Row>
      <Col sm={3} md={6} lg={12}>
        <Container fluid className='d-flex flex-column p-0' style={{ maxHeight: '550px' }}>
          <Container fluid className='text-light bg-black py-1'>marketListing </Container>
          <Container className='text-light px-4 py-1'>
            <NetworkError networkStatus={networkStatus} toggle={toggle} setToggle={setToggle} />
            {
              showForm &&
              (toggle ? (
                <Register toggle={toggle} setToggle={setToggle} />
              ) : (
                <Login toggle={toggle} setToggle={setToggle} />
              ))
            }
          </Container>
        </Container>
      </Col>
    </Row>
  </Container>
}

export default Home