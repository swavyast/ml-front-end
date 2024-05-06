import React, { useContext, useEffect, useState } from 'react'
import { FormToggleContext, NetworkContext, UserContext } from '../AppContext'
import Home from './Home';
import { GoogleLogin } from '@react-oauth/google';
import { Button, Container } from 'react-bootstrap';
import FormComponent from './FormComponent';
import { FontAwesomeIcon, faGithub } from '../index';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';

const LandingPage = () => {

    const userContext = useContext(UserContext);
    const { networkStatus } = useContext(NetworkContext);
    console.log('network status in LandingPage', networkStatus);
    const { toggle, setToggle } = useContext(FormToggleContext);
    const GITHUB_CLIENT_ID = process.env.REACT_APP_GITHUB_CLIENT_ID;
    const [reRender, setReRender] = useState(false);

    useEffect(() => {
        const queryString = window.location.search;
        const searchParams = new URLSearchParams(queryString);
        const codeParams = searchParams.get('code');
        // userContext.setUsername(codeParams)
        if (codeParams && localStorage.getItem('accessToken') === null) {
            async function getAccessToken() {
                await fetch('http://localhost:4000/getAccessToken?code=' + codeParams, {
                    method: 'GET'
                }).then((response) => { return response.json() })
                    .then((data) => {
                        //perform certain operation
                        console.log('data inside useEffect of LandingPage : ', data);
                        if (data.access_token) {
                            localStorage.setItem('accessToken', data.access_token);
                            setReRender(!reRender);
                        }
                    })
            }
            getAccessToken();
        }
    }, []);


    async function getUserData() {

        await fetch('http://localhost:4000/getUserData', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer' + localStorage.getItem('accessToken') //Bearer AccessToken
            }
        }).then((response) => {
            return response.json();
        }).then((data) => {
            console.log('user data : ', data);
            useContext.setUsername(data.login);
        })
    }

    function loginWithGithub(event) {
        event.preventDefault();
        window.location.assign('https://www.github.com/login/oauth/authorize?client_id=' + GITHUB_CLIENT_ID);
    }
    return <>
        {(localStorage.getItem('accessToken')) ? <Home /> :
        <Container className='text-center bg-inherit justify-content-evenly' style={{ minHeight: '500px' }}> {/**(userContext.username === '') &&  */}
            <Container className='p-5'>
                <h1 className='text-white'>{toggle ? ('Get yourself registered today.') : ('You are not logged in yet.')}</h1>
                <Container className='mt-5 justify-content-evenly'>
                    <Container><FormComponent toggle={toggle} setToggle={setToggle} /></Container>
                    <Container className='w-50 py-1 mt-2 mx-auto justify-content-evenly'>
                        <Container>
                            <Container>
                                <Container className='d-flex flex-row border border-light p-0 justify-content-between'>
                                    <GoogleLogin className='p-1' onSuccess={(credResponse) => console.log(JSON.stringify(credResponse))} onError={(error) => console.error('Login failed', error)} />
                                    <Button disabled variant='danger' className='px-2'><FontAwesomeIcon className='text-white p-1' icon={faPowerOff} /></Button>
                                    <Button variant='white' className='bg-white border shadow-lg' onClick={(event) => loginWithGithub(event)}>Sign in with Github <FontAwesomeIcon icon={faGithub} /></Button>
                                </Container>
                            </Container>
                        </Container>
                    </Container>
                </Container>
            </Container>
        </Container>
        }
    </>
}

export default LandingPage