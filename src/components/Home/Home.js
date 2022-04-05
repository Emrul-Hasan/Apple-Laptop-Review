import React from 'react';
import { Link } from 'react-router-dom';
import Carusel from '../Carusel/Carusel';
import useReview from '../hooks/useReview';
import laptopimg from '../image/laptop.jpg';
import './Home.css';

const Home = () => {
  const [review, setReview] = useReview();
  const items = review.slice(0, 3);
  return (
    <div>
      <div className='home'>
      <div className="leftSide__home">
          <h2>Laptop For Start <span>Coding</span></h2>
          <h2>Best <span>Laptop</span> For Starting </h2>
          
        <p>
          Hey are you wanna start coding?
          But you have low budget for starting your journy.
          Don't worry we are here for help you. We have some collection that maybe match with you budget.
          Happy learning.
        </p>

        <Link to='./review' className='home__button'>More Details</Link>
      </div>

      <div className="rightside__home">
        <img src={laptopimg} alt="laptop" />
      </div>
    </div>
    
      <div className='homesection__review'>
        <h2>Customer Reviews(03)</h2>
                  <div className='carusel__Items'>
        {
          items.map(review =>
            <Carusel
              key={review.id}
              review={review}
          ></Carusel>)
          }
          </div>
        <Link to='./review' className='home__button'>See All Reviews</Link>
      </div>
    </div>
  )
}

export default Home;