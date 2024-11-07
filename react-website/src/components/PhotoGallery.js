import React from 'react';
import './PhotoGallery.css'
import WSPGallery from './WSPGallery';

function PhotoGallery () {
    const galleryImages = [
        {
            img: '/images/IMG1.jpeg'
        },
        {
            img: '/images/IMG2.jpeg'
        },
        {
            img: '/images/IMG3.jpeg'
        },
        {
            img: '/images/IMG4.jpeg'
        },
        {
            img: '/images/IMG5.jpeg'
        },
        {
            img: '/images/IMG6.jpeg'
        },
        {
            img: '/images/IMG7.jpeg'
        },
        {
            img: '/images/IMG8.jpeg'
        }
    ]
    return (
        <div class='gallery'>
            <h1>Noel's Photography</h1>
            <br />
            <WSPGallery
                galleryImages={galleryImages}
            />
        </div>
    );
}

export default PhotoGallery;
