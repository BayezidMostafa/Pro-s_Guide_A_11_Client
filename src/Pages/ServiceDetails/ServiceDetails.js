import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServiceDetails = () => {
    const service = useLoaderData()
    const { thumbnail_img, itemID, serviceName, _id, rating, info, Price } = service;

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?itemID=${itemID}`)
        .then(res => res.json())
        .then(data => {
            setReviews(data)
        })
    }, [itemID])
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
            <div>
                
            </div>
        </div>
    );
};

export default ServiceDetails;