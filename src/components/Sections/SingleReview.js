import React from 'react';

const SingleReview = (params) => {
    const {photo, comment, name, dateTime, email} = params.review;
    return (
        
        <div className="flex flex-row justify-start items-start bg-slate-300 rounded-lg mt-3 p-2 shadow-md">
            <div className='w-20'>
                <img src={photo} className="w-14 h-14 rounded-full border-success border-4 shadow-lg" alt="" />
            </div>
            <div>
                <h2 className='text-md text-primary font-semibold'>{name}</h2>
                <h2 className='text-md text-primary font-semibold'>{email}</h2>
                <p className='text-sm font-regular text-blue-700'>{dateTime}</p>
                <p className='text-md font-regular text-black'>{comment}</p>
            </div>
        </div>
    );
};

export default SingleReview;