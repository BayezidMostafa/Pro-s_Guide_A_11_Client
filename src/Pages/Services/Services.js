import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import useTitle from '../../Hook/useTitle';
import Service from './Service';

const Services = () => {
    useTitle('SERVICES')
    const [loading, setLoading] = useState(false)
    const [services, setServices] = useState([]);
    useEffect(() => {
        setLoading(true)
        fetch('https://service-review-server-11.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setLoading(false)
            })
    }, [])
    return (
        <div className='min-h-[70vh]'>
            {
                loading ?
                    <>
                        <div className='flex justify-center items-center min-h-[70vh]'>
                            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-green-600"></div>
                        </div>
                    </>
                    :
                    <>
                        <div className='container mx-auto mt-10'>
                            <p style={{ textShadow: "0 1px 3px gray" }} className='text-center text-2xl sm:text-3xl md:text-5xl font-bold uppercase text-green-900'>All Services Is Here!</p>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
                                {
                                    services.map(service => <Service key={service._id} service={service} />)
                                }
                            </div>
                        </div>
                    </>
            }
        </div>
    );
};

export default Services;