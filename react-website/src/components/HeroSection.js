import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-3.mov" autoPlay loop muted />
            <h1>Difficulties strengthen the mind,<br></br> as labor does the body.</h1>
            <i>Lucius Amadeus Seneca</i>
        </div>
    );
}

export default HeroSection;