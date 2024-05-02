import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import { AppContext } from './AppContext';
import ErrorBoundary from './ErrorBoundary';

function App() {
  console.log(process.env.GITHUB_TOKEN);
  return (
    <AppContext>
      <ErrorBoundary>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home />}></Route>
          </Routes>
          <Footer />
        </Router>
      </ErrorBoundary>
    </AppContext >
  );
}

export default App;
