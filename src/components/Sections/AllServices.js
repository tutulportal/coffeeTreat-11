import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBellConcierge } from '@fortawesome/free-solid-svg-icons';
import SingleService from './SingleService';

const AllServices = (props) => {
    const services = props.services;
    return (
        <div className="bg-light w-full flex flex-col justify-center items-center mt-10 mb-20">
            <h1 className='text-4xl font-bold text-primary mb-5'><FontAwesomeIcon icon={faBellConcierge}></FontAwesomeIcon> Our All Services</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
                {
                    services.map(service => <SingleService key={service._id} service={service}></SingleService>)
                }
            </div>
        </div>
    );
};

export default AllServices;