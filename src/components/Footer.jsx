import React, { useContext, useEffect, useState } from 'react'
import { RepositoryContext, UserContext, useNavigation } from '../AppContext';
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon, faAngleDoubleDown, faAngleDoubleRight, faAngleLeft, faAngleUp, faDiscord, faFacebook, faGithub, faInstagram, faLinkedin, faSkype, faTelegram, faTumblr, faTwitter, faWhatsapp, faXTwitter, faYoutube, myDp } from '../index';
import useScreenSize from '../hooks/ScreenSize';
import SocialNavigations from './SocialNavigations';
import useRepoService from '../services/RepoService';
import { generateRandomString, toCamelCase } from '../js/Utilities';

const Footer = () => {
  // const authContext = useContext(AuthContext);

  // const tokenContext = useContext(TokenContext);

  // const messageContext = useContext(MessageContext);

  const { username, setUsername } = useContext(UserContext);

  const { repositories } = useContext(RepositoryContext);

  const { resetRepositories, fetchAndMapMyRepo, refreshMyRepo } = useRepoService();

  const { isSmall, isMedium } = useScreenSize();

  const navigate = useNavigation();

  const [highlight, setHighlight] = useState(false);

  const [highlightRepo] = useState(false);

  const highlighter = (event) => {
    event.preventDefault();
    setHighlight(!highlight);
    setTimeout(() => { setHighlight(false) }, 3000);
  }

  useEffect(() => {
    console.log('setting username now...');
    setUsername('swavyast');
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
    <Container fluid className='p-0 m-lg-5'>
      <Row className='justify-content-between'>
        <Col sm={12} md={6} lg={3}>
          <Row className={highlight ? ('h-100 border border-dark') : ('h-100 border border-light')} style={{ fontSize: '15px', width: '140%' }}>
            <Col className={highlight ? ('bg-light') : ('bg-dark')}>
              <ListGroup as={'ul'} className='flex-row justify-content-evenly mt-3'>
                <ListGroup.Item as={'li'} style={{ backgroundColor: 'inherit', border: '0px' }}><Link to={'/'} className={highlight ? ('link text-dark') : ('link text-light')}>Home</Link></ListGroup.Item>
                <ListGroup.Item as={'li'} style={{ backgroundColor: 'inherit', border: '0px' }}><Link to={'/about'} className={highlight ? ('link text-dark') : ('link text-light')}>About</Link></ListGroup.Item>
                <ListGroup.Item as={'li'} style={{ backgroundColor: 'inherit', border: '0px' }}><Link to={'/contacts'} className={highlight ? ('link text-dark') : ('link text-light')}>Contacts</Link></ListGroup.Item>
                <ListGroup.Item as={'li'} style={{ backgroundColor: 'inherit', border: '0px' }}><Link to={'/support'} className={highlight ? ('link text-dark') : ('link text-light')}>Support</Link></ListGroup.Item>
              </ListGroup>
            </Col>
            <Col className={highlight ? ('bg-light') : ('bg-dark')}>
              <ListGroup as={'ul'} className='flex-row justify-content-evenly'>
                <ListGroup.Item as={'li'} style={{ backgroundColor: 'inherit', border: '0px' }}><Link to={'/'} className={highlight ? ('link text-dark') : ('link text-light')}>Media</Link></ListGroup.Item>
                <ListGroup.Item as={'li'} style={{ backgroundColor: 'inherit', border: '0px' }}><Link to={'/about'} className={highlight ? ('link text-dark') : ('link text-light')}>Press</Link></ListGroup.Item>
                <ListGroup.Item as={'li'} style={{ backgroundColor: 'inherit', border: '0px' }}><Link to={'/contacts'} className={highlight ? ('link text-dark') : ('link text-light')}>Docs</Link></ListGroup.Item>
                <ListGroup.Item as={'li'} style={{ backgroundColor: 'inherit', border: '0px' }}><Link to={'/support'} className={highlight ? ('link text-dark') : ('link text-light')}>Reports</Link></ListGroup.Item>
              </ListGroup>
            </Col>
            <Col className={highlight ? ('bg-light') : ('bg-dark')}>
              <ListGroup as={'ul'} className='flex-row justify-content-evenly'>
                <ListGroup.Item as={'li'} style={{ backgroundColor: 'inherit', border: '0px' }}><Link to={'/'} className={highlight ? ('link text-dark') : ('link text-light')}>Home</Link></ListGroup.Item>
                <ListGroup.Item as={'li'} style={{ backgroundColor: 'inherit', border: '0px' }}><Link to={'/about'} className={highlight ? ('link text-dark') : ('link text-light')}>About</Link></ListGroup.Item>
                <ListGroup.Item as={'li'} style={{ backgroundColor: 'inherit', border: '0px' }}><Link to={'/contacts'} className={highlight ? ('link text-dark') : ('link text-light')}>Contacts</Link></ListGroup.Item>
                <ListGroup.Item as={'li'} style={{ backgroundColor: 'inherit', border: '0px' }}><Link to={'/support'} className={highlight ? ('link text-dark') : ('link text-light')}>Support</Link></ListGroup.Item>
              </ListGroup>
            </Col>
            <Col className={highlight ? ('bg-light') : ('bg-dark')}>
              <ListGroup as={'ul'} className='flex-row justify-content-evenly'>
                <ListGroup.Item as={'li'} style={{ backgroundColor: 'inherit', border: '0px' }}><Link to={'/'} className={highlight ? ('link text-dark') : ('link text-light')}>Home</Link></ListGroup.Item>
                <ListGroup.Item as={'li'} style={{ backgroundColor: 'inherit', border: '0px' }}><Link to={'/about'} className={highlight ? ('link text-dark') : ('link text-light')}>About</Link></ListGroup.Item>
                <ListGroup.Item as={'li'} style={{ backgroundColor: 'inherit', border: '0px' }}><Link to={'/contacts'} className={highlight ? ('link text-dark') : ('link text-light')}>Contacts</Link></ListGroup.Item>
                <ListGroup.Item as={'li'} style={{ backgroundColor: 'inherit', border: '0px' }}><Link to={'/support'} className={highlight ? ('link text-dark') : ('link text-light')}>Support</Link></ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Col>
        <Col sm={12} md={6} lg={3}>
          <Row className={highlight ? ('h-100 border border-dark') : ('h-100 border border-light')} style={{ fontSize: '15px', width: '140%' }}>
            <Col className={highlight ? ('bg-dark') : ('bg-light')}>
              <ListGroup as={'ul'} className='flex-row justify-content-evenly mt-3'>
                <ListGroup.Item style={{ backgroundColor: 'inherit', border: '0px' }}><Link to={'/'} className={highlight ? ('link text-light') : ('link text-dark')}><FontAwesomeIcon icon={faFacebook} /> Facebook</Link></ListGroup.Item>
                <ListGroup.Item style={{ backgroundColor: 'inherit', border: '0px' }}><Link to={'/'} className={highlight ? ('link text-light') : ('link text-dark')}><FontAwesomeIcon icon={faWhatsapp} /> Whatsapp</Link></ListGroup.Item>
                <ListGroup.Item style={{ backgroundColor: 'inherit', border: '0px' }}><Link to={'/'} className={highlight ? ('link text-light') : ('link text-dark')}><FontAwesomeIcon icon={faInstagram} /> Instagram</Link></ListGroup.Item>
                <ListGroup.Item style={{ backgroundColor: 'inherit', border: '0px' }}><Link to={'/'} className={highlight ? ('link text-light') : ('link text-dark')}><FontAwesomeIcon icon={faTwitter} /> Twitter</Link></ListGroup.Item>
              </ListGroup>
            </Col>
            <Col className={highlight ? ('bg-dark') : ('bg-light')}>
              <ListGroup as={'ul'} className='flex-row justify-content-evenly mt-3'>
                <ListGroup.Item style={{ backgroundColor: 'inherit', border: '0px' }}><Link to={'/'} className={highlight ? ('link text-light') : ('link text-dark')}><FontAwesomeIcon icon={faYoutube} /> Youtube</Link></ListGroup.Item>
                <ListGroup.Item style={{ backgroundColor: 'inherit', border: '0px' }}><Link to={'/'} className={highlight ? ('link text-light') : ('link text-dark')}><FontAwesomeIcon icon={faTelegram} /> Telegram</Link></ListGroup.Item>
                <ListGroup.Item style={{ backgroundColor: 'inherit', border: '0px' }}><Link to={'/'} className={highlight ? ('link text-light') : ('link text-dark')}><FontAwesomeIcon icon={faXTwitter} /> X</Link></ListGroup.Item>
                <ListGroup.Item style={{ backgroundColor: 'inherit', border: '0px' }}><Link to={'/'} className={highlight ? ('link text-light') : ('link text-dark')}><FontAwesomeIcon icon={faSkype} /> Skype</Link></ListGroup.Item>
              </ListGroup>
            </Col>
            <Col className={highlight ? ('bg-dark') : ('bg-light')}>
              <ListGroup as={'ul'} className='flex-row justify-content-evenly mt-3'>
                <SocialNavigations to={'/'} highlight={highlight}><FontAwesomeIcon icon={faGithub} /> Github</SocialNavigations>
                {/* <ListGroup.Item style={{ backgroundColor: 'inherit', border: '0px' }}><Link to={'/'} className={highlight ? ('link text-light') : ('link text-dark')}><FontAwesomeIcon icon={faGithub} /> GitHub</Link></ListGroup.Item> */}
                <ListGroup.Item style={{ backgroundColor: 'inherit', border: '0px' }}><Link to={'/'} className={highlight ? ('link text-light') : ('link text-dark')}><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</Link></ListGroup.Item>
                <ListGroup.Item style={{ backgroundColor: 'inherit', border: '0px' }}><Link to={'/'} className={highlight ? ('link text-light') : ('link text-dark')}><FontAwesomeIcon icon={faTumblr} /> Tumblr</Link></ListGroup.Item>
                <ListGroup.Item style={{ backgroundColor: 'inherit', border: '0px' }}><Link to={'/'} className={highlight ? ('link text-light') : ('link text-dark')}><FontAwesomeIcon icon={faDiscord} /> Discord</Link></ListGroup.Item>
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
                  <Card.Title>{repo.repoName && toCamelCase(repo.repoName)}</Card.Title>
                  <Card.Text>{repo.repoDesc}</Card.Text>
                  {repo.topics && (
                    <Card.Text>{repo.topics.map((topic, index) => (<Button key={generateRandomString(6)} className='btn btn-sm btn-secondary' style={{ padding: '2px', margin: '2px' }}>{topic}</Button>))}</Card.Text>
                  )}
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