import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBagShopping, faMugHot } from '@fortawesome/free-solid-svg-icons';
import { useLoaderData, Link } from 'react-router-dom';

const Service = () => {
    const service = useLoaderData();
    const {_id, serviceName, description, image} = service[0];
    return (
        <section>
            {/* service details */}
            <div className="flex flex-col justify-center items-center py-20 bg-white">
                {/* Breadcrumbs */}
                <div className="text-sm breadcrumbs mb-10">
                    <ul>
                        <li>
                        <Link to="/">
                            <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>&nbsp;Home
                        </Link>
                        </li> 
                        <li>
                        <Link to="/services">
                            <FontAwesomeIcon icon={faBagShopping}></FontAwesomeIcon>&nbsp;Services
                        </Link>
                        </li> 
                        <li>
                            <FontAwesomeIcon icon={faMugHot}></FontAwesomeIcon>&nbsp;{serviceName}
                        </li>
                    </ul>
                </div>
                {/* service info */}
                <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-row justify-between items-center container mx-auto">
                        <div className=''><img src={image} alt={serviceName} className='rounded-lg shadow-md border-primary border-4 w-full' /></div>
                        <div className='w-3/4'>
                            <h2 className='text-6xl font-bold text-primary pb-3 px-3'>{serviceName}</h2>
                            <p className='text-sm font-light px-3'>The Coffee you want.</p>
                            <h2 className='px-3 text-2xl py-2 font-semibold'>About - {serviceName}</h2>
                            <p className='px-3 py-2 font-regular text-md'>{description}</p>
                            <button className="btn btn-primary mx-3 my-3">Get A Hot In Table</button>
                        </div>
                    </div>
                </div>
                {/* servicec comment */}
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-3xl font-semibold">This is comment</h1>
                </div>
            </div>
        </section>
    );
};

export default Service;