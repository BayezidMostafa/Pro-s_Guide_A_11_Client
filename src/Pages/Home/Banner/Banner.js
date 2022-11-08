import { Button } from '@material-tailwind/react';
import React from 'react';
import { Link } from 'react-router-dom';
import bannerImage from '../../../assets/background/banner.jpg'

const Banner = () => {
    return (
        <section className="">
            <div className="container grid md:grid-cols-5 p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left col-span-2">
                    <h1 className="text-3xl font-bold leading-none md:text-5xl">Travel. It's the best investment you can make.</h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">Traveling will inevitably make you more independent and confident. You will realize that you can cope with a lot of unexpected situations.</p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <Link><Button color='green' variant='gradient' to='' className="px-8 py-3 text-lg font-semibold rounded bg-violet-400">Explore</Button></Link>
                        <Link><Button color='green' variant='gradient' to='' className="px-8 py-3 text-lg font-semibold border rounded hover:bg-green-300">Reviews</Button></Link>
                    </div>
                </div>
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 col-span-3">
                    <img src={bannerImage} alt="" className="object-contain" />
                </div>
            </div>
        </section>
    );
};

export default Banner;