import React from 'react';
import './css/home.css';
import backgroundImage from './productIMG/plantPix1.jpeg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='Homeplant' style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh'
    }}>
      <div className='homeplantleft'>
        <h2>Welcome to <br />Awesome Nursery</h2>
        <h6>Where green meets serenity</h6>
        <Link to="/ProductPage"><button>Get Started</button></Link>
      </div>

      <div className='homeplantright'>
        <p>Welcome to Awesome Nursery Where green meets serenity</p>

        <div className='homeplantright2'>
          <p>Where nature thrives! 🌿✨
            Step into a world of lush greenery and pure serenity.
            Breathe fresher air <br /> with our handpicked indoor plants.
            Each plant is carefully nurtured to brighten your space.
            Transform <br /> your home with vibrant, air-purifying greens.
            Experience the calming embrace of nature every day. <br />

            From tiny succulents to majestic ferns, we have it all.
            Let nature’s touch bring peace and tranquility <br /> to you.
            A touch of green can lift your spirit and soothe your mind.
            Caring for plants is caring for your <br />well-being.
            Grow with us—because every leaf tells a unique story.
            At Awesome Nursery, your green journey begins! 🍃💚  </p>
        </div>
      </div>


    </div>
  );
};

export default Home;
