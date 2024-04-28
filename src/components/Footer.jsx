import React, { useContext, useEffect, useState } from 'react'
import { UserContext, useNavigation } from '../AppContext';
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon, faAngleDoubleDown, faAngleDoubleRight, faAngleLeft, faDiscord, faFacebook, faGithub, faInstagram, faLinkedin, faSkype, faTelegram, faTumblr, faTwitter, faWhatsapp, faXTwitter, faYoutube, myDp } from '../index'
import repoService from '../services/RepoService';

const Footer = () => {
  // const authContext = useContext(AuthContext);
  // const tokenContext = useContext(TokenContext);
  // const messageContext = useContext(MessageContext);
  const userContext = useContext(UserContext);
  const navigate = useNavigation();

  const [highlight, setHighlight] = useState(false);

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

  const highlightSocialCorner = (event) => {
    event.preventDefault();
    setHighlight(!highlight);
    setTimeout(() => { setHighlight(false) }, 3000);
  }

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


  return <div className='' style={{ minHeight: '200px' }}>
    <div className='bg-primary' style={{ minHeight: '20px' }}></div>
    <Container>
      <ListGroup.Item className='bg-success text-white text-center d-flex flex-column'> Navigation </ListGroup.Item>
    </Container>
    <Container className='shadow-lg d-flex flex-row gap-1 justify-content-evenly mt-4 p-2'>
      <Container className={highlight ? ('shadow-lg d-flex flex-row border border-primary pb-2') : ('shadow-lg d-flex flex-row border border-black pb-2')}>
        <ListGroup className='p-1 gap-1 d-flex flex-column mt-2'>
          <ListGroup.Item>
            <Link to={'/'} className='link'>Home</Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Link to={'/about'} className='link'>About</Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Link to={'/contacts'} className='link'>Contacts</Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Link to={'/support'} className='link'>Support</Link>
          </ListGroup.Item>
        </ListGroup>
        <ListGroup className='p-1 gap-1 d-flex flex-column mt-2'>
          <ListGroup.Item>
            <Link to={'/'} className='link'>Home</Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Link to={'/about'} className='link'>About</Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Link to={'/contacts'} className='link'>Contacts</Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Link to={'/support'} className='link'>Support</Link>
          </ListGroup.Item>
        </ListGroup>

        <ListGroup className='p-1 gap-1 d-flex flex-column mt-2'>
          <ListGroup.Item>
            <Link to={'/media'} className='link'>Media</Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Link to={'/gallery'} className='link'>Gallery</Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Link to={'/downloads'} className='link'>Downloads</Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Link to={'/askme'} className='link'>Ask Me</Link>
          </ListGroup.Item>
        </ListGroup>
        <ListGroup className='p-1 gap-1 d-flex flex-column mt-2'>
          <ListGroup.Item>
            <Link to={'/media'} className='link'>Media</Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Link to={'/gallery'} className='link'>Gallery</Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Link to={'/downloads'} className='link'>Downloads</Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Link to={'/askme'} className='link'>Ask Me</Link>
          </ListGroup.Item>
        </ListGroup>
      </Container>
      <Container id='socialCorner' className={highlight ? ('bg-light border border-black d-flex flex-row justify-content-evenly position-relative') : ('border border-primary bg-light d-flex flex-row justify-content-evenly position-relative')}>
        {/* <Container className='position-absolute text-center' style={{marginTop:'-20px'}}>
          <ListGroup.Item className='bg-light text-primary d-flex flex-row'> <span className='text-center mx-auto'>Socials</span> </ListGroup.Item>
        </Container> */}
        <ListGroup className='p-1 gap-1 d-flex flex-column'>
          <ListGroup.Item style={{ backgroundColor: 'inherit', border: '0px' }}>
            <Link to={'/'} className='link'><FontAwesomeIcon icon={faFacebook} /> Facebook</Link>
          </ListGroup.Item>
          <ListGroup.Item style={{ backgroundColor: 'inherit', border: '0px' }}>
            <Link to={'/'} className='link'><FontAwesomeIcon icon={faWhatsapp} /> Whatsapp</Link>
          </ListGroup.Item>
          <ListGroup.Item style={{ backgroundColor: 'inherit', border: '0px' }}>
            <Link to={'/'} className='link'><FontAwesomeIcon icon={faInstagram} /> Instagram</Link>
          </ListGroup.Item>
          <ListGroup.Item style={{ backgroundColor: 'inherit', border: '0px' }}>
            <Link to={'/'} className='link'><FontAwesomeIcon icon={faTwitter} /> Twitter</Link>
          </ListGroup.Item>
        </ListGroup>
        <ListGroup className='p-1 gap-1 d-flex flex-column'>
          <ListGroup.Item style={{ backgroundColor: 'inherit', border: '0px' }}>
            <Link to={'/'} className='link'><FontAwesomeIcon icon={faYoutube} /> Youtube</Link>
          </ListGroup.Item>
          <ListGroup.Item style={{ backgroundColor: 'inherit', border: '0px' }}>
            <Link to={'/'} className='link'><FontAwesomeIcon icon={faTelegram} /> Telegram</Link>
          </ListGroup.Item>
          <ListGroup.Item style={{ backgroundColor: 'inherit', border: '0px' }}>
            <Link to={'/'} className='link'><FontAwesomeIcon icon={faXTwitter} /> X</Link>
          </ListGroup.Item>
          <ListGroup.Item style={{ backgroundColor: 'inherit', border: '0px' }}>
            <Link to={'/'} className='link'><FontAwesomeIcon icon={faSkype} /> Skype</Link>
          </ListGroup.Item>
        </ListGroup>
        <ListGroup className='p-1 gap-1 d-flex flex-column'>
          <ListGroup.Item style={{ backgroundColor: 'inherit', border: '0px' }}>
            <Link to={'/'} className='link'><FontAwesomeIcon icon={faGithub} /> GitHub</Link>
          </ListGroup.Item>
          <ListGroup.Item style={{ backgroundColor: 'inherit', border: '0px' }}>
            <Link to={'/'} className='link'><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</Link>
          </ListGroup.Item>
          <ListGroup.Item style={{ backgroundColor: 'inherit', border: '0px' }}>
            <Link to={'/'} className='link'><FontAwesomeIcon icon={faTumblr} /> Tumblr</Link>
          </ListGroup.Item>
          <ListGroup.Item style={{ backgroundColor: 'inherit', border: '0px' }}>
            <Link to={'/'} className='link'><FontAwesomeIcon icon={faDiscord} /> Discord</Link>
          </ListGroup.Item>
        </ListGroup>
      </Container>
      <Container role='button' onClick={highlightSocialCorner} className='w-25 d-flex flex-column'>
        <ListGroup>
          <ListGroup.Item className='p-5 border border-primary my-auto fs-2'><FontAwesomeIcon icon={faAngleLeft} />Socials</ListGroup.Item>
        </ListGroup>
      </Container>
    </Container>
    <Container className='hr bg-dark my-4' style={{ minHeight: '1px' }} />
    <Container className='d-flex flex-row justify-content-around'>
      <ListGroup style={{ marginTop: '68px' }}>
        <Container role='button' onClick={setHighlight} className='d-inline-flex'>
          <Card.Header className='text-primary text-center fs-3 m-2'>Repositories</Card.Header>
          <Card.Text className='text-center text-white p-2' style={{marginTop:'12px'}}><FontAwesomeIcon icon={faAngleDoubleRight} /></Card.Text>
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
      <ListGroup className='mx-2'>
        <Row xs={1} md={2} lg={3} className='g-4'>
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
  </div>
}

export default Footer