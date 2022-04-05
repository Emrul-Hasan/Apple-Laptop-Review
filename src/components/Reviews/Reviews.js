import React, { useEffect, useState } from 'react';
import useReview from '../hooks/useReview';
import Review from '../Review/Review';

const Reviews = () => {
  const [review, setReview] = useReview();

  return (
    <div className='reviews'> 
      {review.map((review => <Review
        key={review.id}
        review={review}
      ></Review>
      ))}
    </div>
  )
}

export default Reviews;