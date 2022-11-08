import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import HomeService from '../HomeService/HomeService';

const Home = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services_lmt')
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
        </div>
    );
};

export default Home;