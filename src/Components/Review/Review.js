import React, { useEffect, useState } from 'react';
import './CarReviews.css'; // Import the CSS file for styling
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../Firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { getDatabase, ref, onValue } from 'firebase/database';
import { useDispatch, useSelector } from 'react-redux';
import { setReviews } from '../../reducers/reviewSlice'; // Adjust the import path

const Review = ({ review }) => {
  return (
    <div className="review">
      <h4>{review.username}</h4>
      <p>{review.comment}</p>
      <div className="rating">Rating: {review.ratings}/5</div>
    </div>
  );
};

const Reviews = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [uid, setUid] = useState('');

  const db = getDatabase();
  // const nav = useNavigate();
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.reviewReducer.reviews);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUid(user.uid);
        setIsDisabled(true);
      } else {
        setIsDisabled(false);
        setUid('');
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const starCountRef = ref(db, 'reviews/');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const dataArray = Object.values(data);
        dispatch(setReviews(dataArray)); // Dispatch the reviews to the store
      }
    });
  }, [dispatch]);

  return (
    <div>
      
      <br />
      <div className='special-container'>
        {isDisabled && (
          <Link className="nav-link active" aria-current="page" to="/AddReview">
            <button className="button-styling">Add your review</button>
          </Link>
        )}
      </div>
      

      <div className="reviews-container">
        <h2>Customer Reviews</h2>
        <br></br>
        <div>
          {reviews.map((review, index) => (
            <Review key={index} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
