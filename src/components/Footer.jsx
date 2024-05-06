import React, { useContext, useEffect, useState } from 'react'
import { AuthContext, MessageContext, RepositoryContext, TokenContext, UserContext, useNavigation } from '../AppContext';
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon, faAngleDoubleDown, faAngleDoubleRight, faAngleLeft, faAngleUp, faDiscord, faFacebook, faGithub, faInstagram, faLinkedin, faSkype, faTelegram, faTumblr, faTwitter, faWhatsapp, faXTwitter, faYoutube, myDp } from '../index';
import useScreenSize from '../hooks/ScreenSize';
import SocialNavigations from './SocialNavigations';
import useRepoService from '../services/RepoService';
import { generateRandomString, isValidUsername, toCamelCase } from '../js/Utilities';
import MainNavigation from './MainNavigation';

const Footer = () => {
  const authContext = useContext(AuthContext);

  const tokenContext = useContext(TokenContext);

  const messageContext = useContext(MessageContext);

  const { username, setUsername } = useContext(UserContext);

  const { repositories } = useContext(RepositoryContext);

  const { resetRepositories, fetchAndMapMyRepo, refreshMyRepo } = useRepoService();

  const { isSmall, isMedium, isLarge } = useScreenSize();

  const navigate = useNavigation();

  const [highlight, setHighlight] = useState(false);

  const [highlightRepo] = useState(false);

  const highlighter = (event) => {
    event.preventDefault();
    setHighlight(!highlight);
    setTimeout(() => { setHighlight(false) }, 3000);
  }

  useEffect(() => {
    // setUsername(localStorage.getItem('accessToken'))
    console.log('username after setUsername() : ', username);
    return () => { };
  }, [username, setUsername]);


  //fetching and mapping repository at the time of page loading.

  useEffect(() => {

    fetchAndMapMyRepo();

    return () => { };

  }, []);

  //repository reset function

  const resetFunction = () => {

    resetRepositories();
  }

  //repository refresh function

  const refreshRepoDetails = () => {

    refreshMyRepo();

  };

  //highlighting repository section onClick

  useEffect(() => {
    const repoSection = document.getElementById('repo-section');

    if (repoSection) {

      repoSection.focus();

    }

    return () => { }; // This component doesn't render anything
  }, [highlightRepo]);

  return <Container fluid className='p-0' style={{ minHeight: '200px' }}>
    <Container fluid className='bg-dark p-0 mb-1' style={{ minHeight: '20px' }} />
    <Container className='bg-dark bg-gradient text-white text-center p-0 mb-4'>Navigation</Container>
    <Container fluid className='p-5 m-5 m-lg-5 flex-row bg-dark justify-content-evenly'>
      <Row className='m-0 p-0 w-100 justify-content-between'>
        <Col sm={12} md={6} lg={3}>
          <Row className={highlight ? ('h-100 border border-secondary') : ('h-100 border border-light')} style={{ fontSize: '15px', width: '160%' }}>
            <Col className='bg-dark'>
              <ListGroup as={'ul'} className='flex-row justify-content-evenly mt-3'>
                <MainNavigation to={'/'} >Home</MainNavigation>
                <MainNavigation to={'/about'} >About</MainNavigation>
                <MainNavigation to={'/contacts'} >Contacts</MainNavigation>
                <MainNavigation to={'/support'} >Support</MainNavigation>
              </ListGroup>
            </Col>
            <Col className='bg-dark'>
              <ListGroup as={'ul'} className='flex-row justify-content-evenly'>
                <MainNavigation to={'/media'} >Media</MainNavigation>
                <MainNavigation to={'/press'} >Press</MainNavigation>
                <MainNavigation to={'/docs'} >Docs</MainNavigation>
                <MainNavigation to={'/reports'} >Reports</MainNavigation>
              </ListGroup>
            </Col>
            <Col className='bg-dark'>
              <ListGroup as={'ul'} className='flex-row justify-content-evenly'>
                <MainNavigation to={'/productivity'} >Productivity</MainNavigation>
                <MainNavigation to={'/feeds'} >Feeds</MainNavigation>
                <MainNavigation to={'/blogs'} >Blogs</MainNavigation>
                <MainNavigation to={'/engage'} >Engagements</MainNavigation>
              </ListGroup>
            </Col>
            <Col className='bg-dark'>
              <ListGroup as={'ul'} className='flex-row justify-content-evenly'>
                <MainNavigation to={'/#'} >Link#1</MainNavigation>
                <MainNavigation to={'/#'} >Link#2</MainNavigation>
                <MainNavigation to={'/#'} >Link#3</MainNavigation>
                <MainNavigation to={'/#'} >Link#4</MainNavigation>
              </ListGroup>
            </Col>
          </Row>
        </Col>
        <Col sm={12} md={6} lg={3}>
          <Row className={highlight ? ('h-100 border border-primary') : ('h-100 border border-light')} style={{ fontSize: '15px', width: '160%' }}>
            <Col className={highlight ? ('bg-secondary') : ('bg-dark')}> {/**{highlight ? ('bg-dark') : ('bg-dark')} */}
              <ListGroup as={'ul'} className='flex-row justify-content-evenly mt-3'>
                <SocialNavigations to={'/'} highlight={highlight}><FontAwesomeIcon icon={faFacebook} /> Facebook</SocialNavigations>
                <SocialNavigations to={'/'} highlight={highlight}><FontAwesomeIcon icon={faWhatsapp} /> Whatsapp</SocialNavigations>
                <SocialNavigations to={'/'} highlight={highlight}><FontAwesomeIcon icon={faInstagram} /> Instagram</SocialNavigations>
                <SocialNavigations to={'/'} highlight={highlight}><FontAwesomeIcon icon={faTwitter} /> Twitter</SocialNavigations>
              </ListGroup>
            </Col>
            <Col className={highlight ? ('bg-secondary') : ('bg-dark')}>
              <ListGroup as={'ul'} className='flex-row justify-content-evenly mt-3'>
                <SocialNavigations to={'/'} highlight={highlight}><FontAwesomeIcon icon={faYoutube} /> Youtube</SocialNavigations>
                <SocialNavigations to={'/'} highlight={highlight}><FontAwesomeIcon icon={faTelegram} /> Telegram</SocialNavigations>
                <SocialNavigations to={'/'} highlight={highlight}><FontAwesomeIcon icon={faXTwitter} /> X</SocialNavigations>
                <SocialNavigations to={'/'} highlight={highlight}><FontAwesomeIcon icon={faSkype} /> Skype</SocialNavigations>
              </ListGroup>
            </Col>
            <Col className={highlight ? ('bg-secondary') : ('bg-dark')}>
              <ListGroup as={'ul'} className='flex-row justify-content-evenly mt-3'>
                <SocialNavigations to={'/'} highlight={highlight}><FontAwesomeIcon icon={faGithub} /> Github</SocialNavigations>
                <SocialNavigations to={'/'} highlight={highlight}><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</SocialNavigations>
                <SocialNavigations to={'/'} highlight={highlight}><FontAwesomeIcon icon={faTumblr} /> Tumblr</SocialNavigations>
                <SocialNavigations to={'/'} highlight={highlight}><FontAwesomeIcon icon={faDiscord} /> Discord</SocialNavigations>
              </ListGroup>
            </Col>
          </Row>

        </Col>
        <Col sm={12} md={6} lg={3}>
          <Row role='button' onClick={highlighter} className='bg-danger bg-gradient border border-white shadow-md justify-content-evenly m-lg-5 p-lg-5'>
            <ListGroup>
              <ListGroup.Item style={{ backgroundColor: 'inherit', border: '0px', width: '140%' }} className='text-white fs-2'><FontAwesomeIcon className='text-warning text-gradient' icon={isSmall || isMedium ? (faAngleUp) : (faAngleLeft)} />Socials</ListGroup.Item>
            </ListGroup>
          </Row>
        </Col>
      </Row>


    </Container>
    {/* <Container className='hr bg-dark my-4' style={{ minHeight: '1px' }} /> */}

    <Container className='bg-dark bg-gradient p-0 mb-1' style={{ minHeight: '20px' }} />
    <Container fluid className='bg-dark text-white text-center p-0 mb-4'>Repositories</Container>
    <Container className='d-flex flex-row justify-content-around'>
      <ListGroup style={{ marginTop: '68px' }}>
        <Container className='d-flex'>
          <Card.Header className='text-primary text-center fs-3 m-2'>Repositories</Card.Header>
          <Card.Text className='text-center text-white p-2' style={{ marginTop: '12px' }}><FontAwesomeIcon icon={faAngleDoubleRight} /></Card.Text>
          <Card.Body className='flex-column g-1'>
            <span className='btn btn-sm btn-success my-auto' onClick={() => refreshRepoDetails()}>Refresh</span>
            <span className='btn btn-sm btn-danger my-auto' onClick={() => resetFunction()}>&nbsp;Reset&nbsp;</span>
          </Card.Body>
        </Container>
        <Card className='my-5' style={{ minWidth: '350px', marginLeft: '-100px' }}>
          <Card.Header className='text-center d-flex flex-column'>Developed By <FontAwesomeIcon icon={faAngleDoubleDown} className='mt-2' /></Card.Header>
          <Container className='avatar' ><Card.Img className='' src={myDp} alt='dp' height={300} /></Container>

          <Card.Footer className='d-flex flex-row justify-content-between'>
            <Card.Link className='link' as={Link} to={'/'}>Go</Card.Link>
            <Card.Link className='link text-muted' as={Link} to={'https://github.com/swavyast'} target='_blank' rel='noopener noreferer'>Follow me on GitHub</Card.Link>
          </Card.Footer>
        </Card>
      </ListGroup>
      <ListGroup className='mx-2 d-flex flex-column'>
        <Row xs={12} sm={8} md={4} lg={2} className={highlightRepo ? 'g-4 border-danger' : 'g-4'} id='repo-section'>
          {repositories.map(repo => (
            <Col key={generateRandomString(10)}>
              <Card className='shadow-md'>
                <Card.Body>
                  <Card.Title>{repo.repoName}</Card.Title>
                  {(isMedium || isLarge) ? <Card.Text>{repo.repoDesc}</Card.Text> : ('')}
                  {repo.topics && (isLarge || isMedium) ? (
                    <Card.Text>{repo.topics.map((topic, index) => (<Button key={generateRandomString(6)} className='btn btn-sm btn-secondary' style={{ padding: '2px', margin: '2px' }}>{topic}</Button>))}</Card.Text>
                  ) : ('')}
                  <Card.Link href={repo.repoUrl} target="_blank" rel="noopener noreferrer">View on GitHub</Card.Link>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated: {repo.lastUpdated}</small>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </ListGroup>

    </Container>
    <Container fluid className='bg-gradient p-0 mt-5 d-flex flex-column' style={{ minHeight: '100px' }}>
      <Container className='my-auto' style={{ backgroundImage: 'linear-gradient(rgba(108, 180, 8, 0.7), rgba(108, 180, 8, 0.8), rgba(108, 180, 8, 0.9), rgba(108, 180, 8, 0.8), rgba(108, 180, 8, 0.7))', minHeight: '25px' }} ></Container>
      <Container className='w-50 bg-dark text-white text-center' style={{ marginTop: '-50px', fontFamily: 'monospace' }}>All Rights Reserved &copy; ml.com</Container>
      <span className='' style={{ minHeight: '2px', backgroundColor: 'purple' }} />
    </Container>
  </Container>
}

export default Footer