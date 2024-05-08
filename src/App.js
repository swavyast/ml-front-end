import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import LoginPage from './components/LoginPage';
import Footer from './components/Footer';
import { NetworkContext } from './AppContext';
import LandingPage from './components/LandingPage';
import NetworkError from './components/NetworkError';
import { useContext, useEffect, useState } from 'react';
import RegistrationPage from './components/RegistrationPage';
import Main from './components/Main';
import NewFooter from './components/NewFooter';

function App() {
  // const [onlineStatus, setOnlineStatus] = useState(false);onlineStatus={onlineStatus} setOnlineStatus={setOnlineStatus} 
  const { networkStatus, setNetworkStatus } = useContext(NetworkContext);
  const [loading, setLoading] = useState(true);
  console.log('networkStatus in App.js outside useEffect()', networkStatus.status);
  console.log('networkStatus object in App.js outside useEffect()', networkStatus);


  useEffect(() => {
    const handleOnlineStatusChange = () => {

      if (!navigator.onLine) {

        setNetworkStatus(prevStatus=>({
          ...prevStatus,
          status: true,
          messageString: 'Oops! No Network'
        }));
        console.log('inside if block',networkStatus);
      } else {

        setNetworkStatus(prevStatus=>({
          ...prevStatus,
          status: false,
          messageString: 'Network status OK'
        }));
        console.log('inside else block',networkStatus);
      }

    }

    // Add event listener for online status changes
    window.addEventListener('online', handleOnlineStatusChange);
    window.addEventListener('offline', handleOnlineStatusChange);



    console.log('networkStatus in App.js useEffect()', networkStatus);

    // Cleanup: remove event listeners when component unmounts
    return () => {
      window.removeEventListener('online', handleOnlineStatusChange);
      window.removeEventListener('offline', handleOnlineStatusChange);
    };
  }, []);


  useEffect(() => {
    setLoading(false); // Set loading to false once the useEffect runs and state is updated
  }, [networkStatus.messageString]); 

  return (
    <Router>
      <Header />
      <Routes>
        {(networkStatus.status && !loading ) && <Route path='/' element={<NetworkError />} />}
        {(!networkStatus.status && !loading ) && <Route path='/' element={<Main />} />}
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegistrationPage />} />
      </Routes>
      <NewFooter />
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
