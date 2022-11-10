import { Button, Input, Textarea } from '@material-tailwind/react';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaTimes, FaPen } from "react-icons/fa";


const Review = ({ review, handleDelete }) => {
    const [showModal, setShowModal] = useState(false);
    const { picture, _id, name, email, review_comment, rating } = review;



    const handleReviewUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const review_comment = form.review_text.value;
        const rating = form.rating.value;
        console.log(review_comment, rating);
        const review = {
            review_comment,
            rating
        }
        fetch(`http://localhost:5000/myReviews/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('Review Updated Successfully')
            }
            console.log(data)
        })
        .catch(err => console.error(err))
    }



    return (
        <div className="relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg">
            <div className="relative flex gap-4">
                <img src={picture} className="relative rounded-lg -top-8 -mb-4 border-2 shadow shadow-gray-400 hover:shadow-md hover:shadow-black duration-300 h-20 w-20" alt="" loading="lazy" />
                <div className="flex flex-col w-full">
                    <div className="md:flex flex-row justify-between">
                        <p className="relative text-xl whitespace-nowrap truncate overflow-hidden">{name}</p>
                        <div className='flex gap-3'>
                            <FaTimes onClick={() => handleDelete(_id)} className='text-red-400 text-2xl cursor-pointer hover:text-red-700 duration-150 bg-gray-200 rounded bg:shadow-md shadow-black' />
                            <>
                                <FaPen
                                    className="text-2xl p-[2px] text-green-700 cursor-pointer rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    onClick={() => setShowModal(true)}
                                >

                                </FaPen>
                                {showModal ? (
                                    <>
                                        <div
                                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                        >
                                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                                {/*content*/}
                                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                    {/*header*/}
                                                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                                        <h3 className="text-3xl font-semibold">
                                                            Modal Title
                                                        </h3>
                                                        <button
                                                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                            onClick={() => setShowModal(false)}
                                                        >
                                                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                                ×
                                                            </span>
                                                        </button>
                                                    </div>
                                                    {/*body*/}
                                                    <div className="relative p-6 flex-auto">
                                                        <form onSubmit={handleReviewUpdate} className='grid gap-4'>
                                                            <Input name='rating' defaultValue={rating} className='w-[70vw] md:w-[30vw]' color="green" label="Rating" />
                                                            <Textarea name='review_text' defaultValue={review_comment} className='w-[70vw] md:w-[30vw]' color='green' label="Review Text" />
                                                            <Button type='submit' color='green' variant='gradient'>Update</Button>
                                                        </form>
                                                    </div>
                                                    {/*footer*/}
                                                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                                        <button
                                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                            type="button"
                                                            onClick={() => setShowModal(false)}
                                                        >
                                                            Close
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                                    </>
                                ) : null}
                            </>
                        </div>
                        {/* <p>Rating: {rating}</p> */}
                    </div>
                    <p className="text-gray-400 text-sm">{email}</p>
                </div>
            </div>
            <p className="-mt-4 text-gray-500 overflow-auto">{review_comment}</p>
        </div >
    );
};

export default Review;