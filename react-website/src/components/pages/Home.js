import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Biography from '../Biography'
// import Footer from '../Footer';

function Home() {
    return (
        <>
            <HeroSection />
            <Biography />
            <Cards />
            {/* <Footer /> */}
        </>
    );
}

export default Home;