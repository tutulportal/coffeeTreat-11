import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCamera, faStar, faComments } from '@fortawesome/free-solid-svg-icons';

const CounterSection = () => {
    return (
        <div className='flex flex-col justify-center items-center mb-16'>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5 rounded-lg'>

                <div className="p-10 flex flex-col justify-center items-center bg-transparent border border-2 border-primary rounded-md">
                    <FontAwesomeIcon className='text-5xl text-primary' icon={faHeart}></FontAwesomeIcon>
                    <p className='text-primary'>20.3k</p>
                    <h1 className='text-2xl text-primary font-semibold'>Happy Customers</h1>
                </div>

                <div className="p-10 flex flex-col justify-center items-center bg-transparent border border-2 border-primary rounded-md">
                    <FontAwesomeIcon className='text-5xl text-primary' icon={faCamera}></FontAwesomeIcon>
                    <p className='text-primary'>7.7k</p>
                    <h1 className='text-2xl text-primary font-semibold'>Moments</h1>
                </div>

                <div className="p-10 flex flex-col justify-center items-center bg-transparent border border-2 border-primary rounded-md">
                    <FontAwesomeIcon className='text-5xl text-primary' icon={faStar}></FontAwesomeIcon>
                    <p className='text-primary'>4.9/5</p>
                    <h1 className='text-2xl text-primary font-semibold'>Ratings</h1>
                </div>

                <div className="p-10 flex flex-col justify-center items-center bg-transparent border border-2 border-primary rounded-md">
                    <FontAwesomeIcon className='text-5xl text-primary' icon={faComments}></FontAwesomeIcon>
                    <p className='text-primary'>36.1k</p>
                    <h1 className='text-2xl text-primary font-semibold'>Comments</h1>
                </div>

            </div>
        </div>
    );
};

export default CounterSection;