import React, { useContext, useEffect, useState } from 'react'
import { AuthContext, MessageContext, TokenContext, UserContext, useNavigation } from '../AppContext'
import { Col, Container, Row } from 'react-bootstrap';
import useRepoService from '../services/RepoService';

const Home = () => {

  const authContext = useContext(AuthContext);
  const tokenContext = useContext(TokenContext);
  const messageContext = useContext(MessageContext);
  const userContext = useContext(UserContext);
  const repoService = useRepoService();
  const navigate = useNavigation();

  const [userDetails, setUserDetails] = useState([{
    name: '',
    age: '',
    dob: '',
    username: ''
  }]);

  useEffect(
    () => {
      const params = '';
      repoService.fetchUserData();
      const userDetails = localStorage.getItem('userData');
    }, []);

  return <>
    {<Container fluid className='p-0' style={{ minHeight: '500px' }}>
      <Row>
        <Col sm={3} md={6} lg={12}>
          <Container fluid className='d-flex flex-column p-0' style={{ maxHeight: '550px' }}>
            <Container fluid className='text-light bg-black py-1'>marketListing </Container>
            <Container className='text-light px-4 py-1'>

              <h2 className='text-center'>Welcome to dashboard { localStorage.getItem('accessToken')}</h2>

            </Container>
          </Container>
        </Col>
      </Row>
    </Container>}
  </>
}

export default Home