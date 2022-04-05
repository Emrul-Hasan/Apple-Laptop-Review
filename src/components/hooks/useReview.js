import React, { useEffect, useState } from 'react';

const useReview = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch('reviewsdata.json')
      .then(resp => resp.json())
      .then(data => setReview(data))
  }, [])
  
 return [review, setReview]
}

export default useReview;