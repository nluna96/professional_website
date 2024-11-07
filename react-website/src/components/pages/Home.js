import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Biography from '../Biography';
import PhotoGallery from '../PhotoGallery';

function Home() {
    return (
        <>
            <HeroSection />
            <Biography />
            <PhotoGallery />
        </>
    );
}

export default Home;