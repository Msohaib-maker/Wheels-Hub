import { useEffect, useState } from "react";
import { getDatabase, ref, set } from 'firebase/database';
import { v4 as uuidv4 } from 'uuid';
import { useParams } from 'react-router-dom';


function AddReview(props){

    const { the_uid } = useParams();

    const [ReviewData, setReviewData] = useState({
        username: localStorage.getItem('person_name'),
        comment: '',
        ratings: '0'
    })

    const db = getDatabase()


    const ClearFields = () => {
        setReviewData({
            username: localStorage.getItem('person_name'),
            comment: '',
            ratings: '0'
        });
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        set(ref(db, 'reviews/' + uuidv4()), ReviewData)
                .then(() => {
                    // Success - data saved to Realtime Database
                    alert('Your review has been added');
                    ClearFields(); // Clear form fields after successful upload
                })
                .catch((error) => {
                    console.error('Error saving data to Realtime Database:', error);
                });
    }

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setReviewData(prevData => ({
            ...prevData,
            [id]: value,
        }));
    }

    const handleTypeChange = (e) => {
        setReviewData({ ...ReviewData, ratings: e.target.value });
    };

    return(
        <div>
            <form onSubmit={handleSubmit} className='form-style'>
                <h2>Review from {localStorage.getItem('person_name')}</h2>
                <input type="text" className="form-control" id="comment" placeholder="Enter Comment" onChange={handleInputChange} value={ReviewData.comment} />
                <select id="ratings" class="form-control" value={ReviewData.ratings} onChange={handleTypeChange}>
                    <option selected>Choose...</option>
                    <option>5</option>
                    <option>4</option>
                    <option>3</option>
                    <option>2</option>
                    <option>1</option>
                </select>

                <button type="submit" className="btn btn-primary">Add review</button>
            </form>
        </div>
    );
}

export default AddReview;