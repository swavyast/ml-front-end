import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'react-bootstrap';
import { AppContext } from './AppContext';
import { FontAwesomeIcon, faHome } from '@fortawesome/fontawesome-free';
import ErrorBoundary from './ErrorBoundary';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <AppContext>
        <App />
      </AppContext>
    </ErrorBoundary>
  </React.StrictMode>
);

export {
  FontAwesomeIcon,
  faHome,

}