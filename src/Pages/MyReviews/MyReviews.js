import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import Review from './Review';

const MyReviews = () => {
    const {user} = useContext(AuthContext);
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/myReviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setReviews(data)
            console.log(data);
        })
    }, [user?.email])
    return (
        <div className='container mx-auto mt-10'>
            {
                reviews.map(review => <Review key={review._id} review={review}/>)
            }
        </div>
    );
};

export default MyReviews;