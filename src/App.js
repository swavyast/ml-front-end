import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import { AppContext } from './AppContext';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <AppContext>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
        <Footer />
      </Router>
    </AppContext>
  );
}

export default App;
