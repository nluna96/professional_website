import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards () {
    return (
        <div className='cards'>
            <h1>Check out these Epic locations!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem src='images/img-11.jpg' text='Explore the waterfall' label='Adventure' path='/services' />
                        <CardItem src='images/img-13.jpg' text='Visit Aztec Pyramid' label='Luxury' path='/services' />

                    </ul>
                    <ul className='cards__items'>
                        <CardItem src='images/img-10.jpg' text='Explore the Cenotes' label='Adventure' path='/services' />
                        <CardItem src='images/img-12.jpg' text='Visit the beautiful beaches of Mexico' label='Leisure' path='/services' />
                        <CardItem src='images/img-14.jpg' text='Explore the lakes' label='Adventure' path='/services' />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;