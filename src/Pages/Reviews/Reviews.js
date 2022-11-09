import React from 'react';

const Reviews = ({ review }) => {
    console.log(review);
    const {serviceName, review_comment, name, picture, rating, email} = review;
    return (
        <div className="relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg">
            <div className="relative flex gap-4">
                <img src={picture} className="relative rounded-lg -top-8 -mb-4 border-2 shadow shadow-gray-400 hover:shadow-md hover:shadow-black duration-300 h-20 w-20" alt="" loading="lazy" />
                    <div className="flex flex-col w-full">
                        <div className="md:flex flex-row justify-between">
                            <p className="relative text-xl whitespace-nowrap truncate overflow-hidden">{name}</p>
                            {/* <p>Rating: {rating}</p> */}
                        </div>
                        <p className="text-gray-400 text-sm">{email}</p>
                    </div>
            </div>
            <p className="-mt-4 text-gray-500 overflow-auto">{review_comment}</p>
        </div>
    );
};

export default Reviews;