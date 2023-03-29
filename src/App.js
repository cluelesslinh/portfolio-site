import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
