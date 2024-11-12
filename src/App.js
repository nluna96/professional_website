import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router} from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import HeroSection from '../src/components/HeroSection';
import Biography from '../src/components/Biography';
import PhotoGallery from '../src/components/PhotoGallery';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <HeroSection />
      <Biography />
      <PhotoGallery />
      <Footer />
      {/* <Routes>
        <Route path='/' element={<Home/>} />
      </Routes> */}
    </Router>
    </>
  );
}

export default App;
