import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../../Hook/useTitle';
import Review from './Review';

const MyReviews = () => {
    const { user, userLogOut } = useContext(AuthContext);
    const [loading, setLoading] = useState(false)
    useTitle("MY REVIEWS")
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        setLoading(true)
        fetch(`https://service-review-server-11.vercel.app/myReviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("pro's-token")}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return userLogOut()
                }
                return res.json()

            })
            .then(data => {
                setReviews(data)
                console.log(data);
                setLoading(false)
            })
    }, [user?.email, userLogOut])

    const handleDelete = _id => {
        const confirmation = window.confirm("Are you sure? You Want To Delete This Review!")
        if (confirmation) {
            fetch(`https://service-review-server-11.vercel.app/myReviews/${_id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log(data.deletedCount);
                        toast.success('Review Deleted')
                        const remainingReview = reviews.filter(rvw => rvw._id !== _id)
                        setReviews(remainingReview);
                    }
                })
                .catch(err => console.error(err))

        }
    }


    return (
        <div>
            {
                loading ?
                    <>
                        <div className='flex justify-center items-center min-h-[70vh]'>
                            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-green-600"></div>
                        </div>
                    </>
                    :
                    <>
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
                    </>
            }
        </div>
    );
};

export default MyReviews;