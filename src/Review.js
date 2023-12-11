import React, { useState } from 'react';
import './CarReviews.css'; // Import the CSS file for styling

const Review = ({ review }) => {
  return (
    <div className="review">
      <h4>{review.userName}</h4>
      <p>{review.comment}</p>
      <div className="rating">Rating: {review.rating}/5</div>
    </div>
  );
};

const Reviews = () => {
  const initialReviews = [
    {
      userName: 'Muhammad Jareer',
      comment: 'Excellent condition. Loved the experience!',
      rating: 4.5,
    },
    {
      userName: 'Jane Smith',
      comment: 'Great Car. Smooth transaction. Would buy again!',
      rating: 4,
    },
    // Add more reviews as needed
  ];

  const [reviews, setReviews] = useState(initialReviews);

  return (
    <div className="reviews-container">
      
      <h2>Customer Reviews</h2>
      <div>
        {reviews.map((review, index) => (
          <Review key={index} review={review} />
        ))}
      </div>
      {/* Add a button or link to navigate to a full reviews page */}
      <a href="/all-reviews" className="view-all-reviews">
        View All Reviews
      </a>
    </div>
  );
};

export default Reviews;
