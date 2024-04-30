import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free'
import '@fortawesome/fontawesome-svg-core'
import {faGithub, faLinkedin, faTumblr, faDiscord, faWhatsapp, faFacebook, faTwitter, faXTwitter, faInstagram, faSkype, faGooglePlay, faGoogleDrive, faYoutube, faTelegram} from '@fortawesome/free-brands-svg-icons'
import {faHouse, faAngleLeft, faAngleRight, faAngleUp, faAngleDown, faAngleDoubleRight, faAngleDoubleDown} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import myDp from '../src/images/DP_1.png';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <App />
  </React.StrictMode>
);

export {
  FontAwesomeIcon,
  faHouse, faAngleLeft, faAngleRight, faAngleUp, faAngleDown, faAngleDoubleRight, faAngleDoubleDown,
  faGithub, faLinkedin, faTumblr, faDiscord,
  faWhatsapp, faFacebook, faTwitter, faXTwitter,
  faInstagram, faSkype, faGooglePlay, faGoogleDrive,
  faYoutube, faTelegram,
  myDp
}