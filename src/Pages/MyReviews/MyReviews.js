import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import Review from './Review';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/myReviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
                console.log(data);
            })
    }, [user?.email])

    const handleDelete = _id => {
        const confirmation = window.confirm("Are you sure? You Want To Delete This Review!")
        if (confirmation) {
            fetch(`http://localhost:5000/myReviews/${_id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deleteCount > 0) {
                        alert('Review Deleted Successfully')
                        const remainingReview = reviews.filter(review => review._id !== _id)
                        setReviews(remainingReview);
                    }
                })

        }
    }


    return (
        <div className='container mx-auto mt-10 min-h-[70.5vh]'>
            {
                reviews.length === 0 ?
                    <>
                        <p className='text-3xl font-semibold text-center'>No Review Found. Please Add Some Review!</p>
                    </>
                    :
                    <>
                        {
                            reviews.map(review => <Review key={review._id} review={review} handleDelete={handleDelete} />)
                        }
                    </>
            }
        </div>
    );
};

export default MyReviews;