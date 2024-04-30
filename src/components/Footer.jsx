import React, { useContext, useEffect, useState } from 'react'
import { UserContext, useNavigation } from '../AppContext';
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon, faAngleDoubleDown, faAngleDoubleRight, faAngleLeft, faAngleRight, faAngleUp, faDiscord, faFacebook, faGithub, faInstagram, faLinkedin, faSkype, faTelegram, faTumblr, faTwitter, faWhatsapp, faXTwitter, faYoutube, myDp } from '../index'
import repoService from '../services/RepoService';
import useScreenSize from '../hooks/ScreenSize';

const Footer = () => {
  // const authContext = useContext(AuthContext);
  // const tokenContext = useContext(TokenContext);
  // const messageContext = useContext(MessageContext);
  const userContext = useContext(UserContext);
  const { isSmall, isMedium, isLarge } = useScreenSize();
  const navigate = useNavigation();

  const [highlight, setHighlight] = useState(false);
  const [highlightRepo, setHighlightRepo] = useState(false);

  const [repoDetails, setRepoDetails] = useState([{
    repoId: '',
    repoName: '',
    repoUrl: '', //html_url
    repoApiUrl: '', //url
    repoDesc: '',
    gitUrl: '',
    sshUrl: '',
    cloneUrl: '',
    homepage: '',
    size: '',
    language: '',
    forksCount: '',
    mirrorUrl: '',
    openIssuesCount: '',
    license: '',
    signoffRequired: '',
    topics: [],
    defaultBranch: '',
    visibility: '',
    hasProjects: false,
    hasIssues: false,
    hasDownloads: false,
    hasWiki: false,
    hasPages: false,
    hasDiscussions: false,
    isArchieved: false,
    isDisabled: false,
    allowsForking: false,
    isTemplate: false,
    dateCreated: '',
    datePushed: '',
    lastUpdated: '',

  }]);

  const highlighter = (event) => {
    event.preventDefault();
    setHighlight(!highlight);
    setTimeout(() => { setHighlight(false) }, 3000);
  }

  useEffect(() => {
    const repoSection = document.getElementById('repo-section');
    if (highlightRepo && repoSection) {
      repoSection.focus();
    }
    return () => {}; // This component doesn't render anything
  }, [highlightRepo]);


  const fetchRepo = () => {

    repoService.fetchMyRepositories()
      .then((res) => {
        const repositories = res.map((repo) => ({
          repoId: repo.id,
          repoName: repo.name,
          repoUrl: repo.html_url, //html_url
          repoApiUrl: repo.url, //url
          repoDesc: repo.description,
          gitUrl: repo.git_url,
          sshUrl: repo.ssh_url,
          cloneUrl: repo.clone_url,
          homepage: repo.homepage,
          size: repo.size,
          language: repo.language,
          forksCount: repo.forks_count,
          mirrorUrl: repo.mirror_url,
          openIssuesCount: repo.open_issues_count,
          license: repo.license,
          signoffRequired: repo.web_commit_signoff_required,
          topics: [...repo.topics],
          defaultBranch: repo.default_branch,
          visibility: repo.visibility,
          hasProjects: repo.has_projects,
          hasIssues: repo.has_issues,
          hasDownloads: repo.has_downloads,
          hasWiki: repo.has_wiki,
          hasPages: repo.has_pages,
          hasDiscussions: repo.has_discussions,
          isArchieved: repo.archived,
          isDisabled: repo.disabled,
          allowsForking: repo.allow_forking,
          isTemplate: repo.is_template,
          dateCreated: repo.created_at,
          datePushed: repo.pushed_at,
          lastUpdated: repo.updated_at,
        }))

        setRepoDetails(repositories);
      })
  }

  useEffect(() => {
    fetchRepo();
  }, []);

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
                <ListGroup.Item style={{ backgroundColor: 'inherit', border: '0px' }}><Link to={'/'} className={highlight ? ('link text-light') : ('link text-dark')}><FontAwesomeIcon icon={faGithub} /> GitHub</Link></ListGroup.Item>
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
    <Container fluid className='bg-dark p-0 mb-1' style={{ minHeight: '20px' }} />
    <Container className='bg-dark bg-gradient text-white  text-center p-0 mb-4'>Repositories</Container>
    <Container className='d-flex flex-row justify-content-around'>
      <ListGroup style={{ marginTop: '68px' }}>
        <Container role='button' onClick={()=>setHighlightRepo(true)} className='d-flex'>
          <Card.Header className='text-primary text-center fs-3 m-2'>Repositories</Card.Header>
          <Card.Text className='text-center text-white p-2' style={{ marginTop: '12px' }}><FontAwesomeIcon icon={faAngleDoubleRight} /></Card.Text>
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
          {repoDetails.map(repo => (
            <Col key={repo.repoId}>
              <Card className='shadow-md'>
                <Card.Body>
                  <Card.Title>{repo.repoName}</Card.Title>
                  <Card.Text>{repo.repoDesc}</Card.Text>
                  <Card.Text>{repo.topics.map((topic) => topic + ', ').join('').slice(0, -2) + '.'}</Card.Text>
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
  </Container>
}

export default Footer