import { Button } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import HomeService from '../HomeService/HomeService';

const Home = () => {
    const [services, setServices] = useState([])
    const size = 3;
    useEffect(() => {
        fetch(`http://localhost:5000/services?size=${size}`)
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div>
            <Banner />
            <div className='grid w-[95%] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-5 md:container mb-10'>
                {
                    services.map(service => <HomeService key={service._id} service={service}/>)
                }
            </div>
                <div className='text-center'><Button className=''>See All</Button></div>
        </div>
    );
};

export default Home;