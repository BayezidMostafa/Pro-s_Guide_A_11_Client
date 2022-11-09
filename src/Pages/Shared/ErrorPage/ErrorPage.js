import { Button } from '@material-tailwind/react';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/error-404.png'

const ErrorPage = () => {
    return (
        <div className='flex items-center justify-center min-h-screen'>
            <div className='flex flex-col items-center'>
                <img className='w-3/4 h-3/4' src={logo} alt="" />
                <p style={{textShadow:"0 2px 4px black"}} className='font-extrabold text-2xl sm:text-4xl md:text-7xl mt-10 uppercase bg-gray-200 p-5 rounded-xl shadow-sm shadow-blue-gray-600 text-green-800'>Page Not Found</p>
                <Link to='/'><Button color='green' variant='gradient' className='mt-10' size='lg' >Go Home</Button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;