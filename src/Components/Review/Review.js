import React, { useEffect,useState } from 'react';
import './CarReviews.css'; // Import the CSS file for styling
import { Link, useNavigate } from 'react-router-dom';
import {auth} from '../../Firebase/firebase';
import { onAuthStateChanged  } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";


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
  const [Uid, setUid] = useState('');
  
  const db = getDatabase();
  const nav = useNavigate();

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





  const [reviews, setReviews] = useState([]);

  const starCountRef = ref(db, 'reviews/');
  onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      

      if(data){
        const dataArray = Object.values(data);

        const revs = dataArray.map((ele, index) =>{
          return <Review key={index} review={ele} />
        })

        if(reviews.length != dataArray.length){
          setReviews(revs);
        }

      }
      else{

      }
              
  });
  

  



  return (
    <div>
             <div class="container">
                <img src="./car.jpg" class="background-image" alt="Background Image"></img>
                <div class="overlay-text">
                    <h2>Welcome to ApnaWheels by Car Tech</h2>
                    <p>Get the best car accessories</p>
                </div>
            </div>
            <br></br>
      {isDisabled &&
        <Link className="nav-link active" aria-current="page" to="/AddReview">
        <button className="button-styling">Add your review</button>
      </Link>
      }

      
      <div className="reviews-container">
      <h2>Customer Reviews</h2>
      <div>
        {reviews}
      </div>
      {/* Add a button or link to navigate to a full reviews page */}
      
    </div>
    </div>
    
  );
};

export default Reviews;
