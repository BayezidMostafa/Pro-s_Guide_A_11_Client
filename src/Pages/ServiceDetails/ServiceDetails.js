import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Textarea,
    Input,
    Button,
} from "@material-tailwind/react";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import Reviews from '../Reviews/Reviews';
import { AuthContext } from '../../Context/AuthProvider';

const ServiceDetails = () => {
    const {user} = useContext(AuthContext)
    const service = useLoaderData()
    const { thumbnail_img, itemID, serviceName, _id, rating, info, Price } = service;
    
    const [reviews, setReviews] = useState([]);
    console.log(reviews);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?itemID=${itemID}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [itemID])

    const onReviewSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const review_text = form.review_text.value;
        const rating = form.rating.value;
        // console.log(review_text, rating);
        const review = {
            itemID,
            serviceName,
            review_comment: review_text,
            name: user?.displayName,
            email: user?.email,
            picture: user?.photoURL,
            rating
        }
        // fetch('http://localhost:5000/reviews')
    }
    console.log(reviews);
    return (
        <div className='mt-16 container mx-auto'>
            <div>
                <Card className="">
                    <CardHeader color="green" className="relative">
                        <PhotoProvider
                            speed={() => 800}
                            easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
                        >
                            <PhotoView src={thumbnail_img}>
                                <img src={thumbnail_img} style={{ objectFit: 'cover' }} alt="" />
                            </PhotoView>
                        </PhotoProvider>
                    </CardHeader>
                    <CardBody className="text-center">
                        <p className='font-semibold text-blue-gray-900 text-2xl sm:text-3xl md:text-4xl'>{serviceName}</p>
                        <Typography variant="h6" className="mt-5">
                            {info}
                        </Typography>
                    </CardBody>
                    <CardFooter divider className="flex items-center justify-between py-3">
                        <Typography variant="h4">Start From: ${Price}</Typography>
                        <Typography variant="h4" color="gray" className="flex gap-1">
                            Rating: {rating}
                        </Typography>
                    </CardFooter>
                </Card>
            </div>
            <hr className='h-2 bg-green-400 mt-20 rounded-md shadow-lg shadow-black' />
            <p></p>
            <div className='mt-20'>
                {
                    reviews.map(review => <Reviews key={review._id} review={review} />)
                }
            </div>
            <div>
                <p className='text-xl mb-5'>Add a review</p>
                <form onSubmit={onReviewSubmit} className='grid md:grid-cols-3 gap-5 w-[96%] mx-auto md:w-full'>
                    <div className='col-span-2'>
                        <Textarea name='review_text' variant="outlined" color='green' label="Write a Review" required />
                    </div>
                    <div className='col-span-1'>
                        <Input name='rating' color='green' size="md" label="Rating" required />
                        <Button type='submit' className='mt-5 w-full' color='green' variant='gradient'>Submit</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ServiceDetails;