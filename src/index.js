import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free'
import '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedin, faTumblr, faDiscord, faWhatsapp, faFacebook, faTwitter, faXTwitter, faInstagram, faSkype, faGooglePlay, faGoogleDrive, faYoutube, faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faHouse, faAngleLeft, faAngleRight, faAngleUp, faAngleDown, faAngleDoubleRight, faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaUser, FaLock, FaPhone, FaEnvelope } from "react-icons/fa";
import { CgGenderFemale, CgGenderMale } from "react-icons/cg";
import myDp from '../src/images/DP_1.png';
import { GoogleOAuthProvider } from '@react-oauth/google'
import { AppContext } from './AppContext';
import ErrorBoundary from './ErrorBoundary';

const root = ReactDOM.createRoot(document.getElementById('root'));
const cId = process.env.REACT_APP_OAUTH_CLIENT_ID;
console.log('REACT_APP_OAUTH_CLIENT_ID:', process.env.REACT_APP_OAUTH_CLIENT_ID);
root.render(
  <AppContext>
    <ErrorBoundary>
      <GoogleOAuthProvider clientId={cId}>
        <App />
      </GoogleOAuthProvider>
    </ErrorBoundary>
  </AppContext >
);

export {
  FontAwesomeIcon,
  faHouse, faAngleLeft, faAngleRight, faAngleUp, faAngleDown, faAngleDoubleRight, faAngleDoubleDown,
  faGithub, faLinkedin, faTumblr, faDiscord,
  faWhatsapp, faFacebook, faTwitter, faXTwitter,
  faInstagram, faSkype, faGooglePlay, faGoogleDrive,
  faYoutube, faTelegram,
  FaUser, FaLock, FaPhone, FaEnvelope, CgGenderFemale, CgGenderMale,
  myDp
}