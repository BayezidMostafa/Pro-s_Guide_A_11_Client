import { Button } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../Hook/useTitle';
import Banner from '../Banner/Banner';
import { Contact } from '../Contact/Contact';
import HomeService from '../HomeService/HomeService';
import SpotSlider from '../SpotSlider/SpotSlider';
import TravelQuote from '../TravelQuote/TravelQuote';

const Home = () => {
    const [services, setServices] = useState([])
    useTitle("HOME")
    const size = 3;
    useEffect(() => {
        fetch(`https://service-review-server-11.vercel.app/services?size=${size}`)
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div>
            <Banner />
            <div className='grid w-[95%] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-5 md:container mb-10'>
                {
                    services.map(service => <HomeService key={service._id} service={service} />)
                }
            </div>
            <div className='text-center'><Link to='/services'><Button variant='gradient' size='lg' color='green' className=''>See All</Button></Link></div>
            <TravelQuote />
            <SpotSlider />
            <Contact/>
        </div>
    );
};

export default Home;