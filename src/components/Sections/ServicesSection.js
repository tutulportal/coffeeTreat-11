import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBellConcierge, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import SingleService from './SingleService';

const ServicesSection = (props) => {
    const services = props.services;
    return (
        <div className="bg-light w-full flex flex-col justify-center items-center mt-10 mb-20">
            <h1 className='text-4xl font-bold text-primary mb-5'><FontAwesomeIcon icon={faBellConcierge}></FontAwesomeIcon> Our Services</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">

            {
                services.map(service => <SingleService key={service._id} service={service}></SingleService>)
            }

            </div>
            <div className="flex flex-row justify-center items-center pt-10">
                <Link to="/services" className='btn btn-primary bg-transparent text-primary hover:text-white'>View More&nbsp;<FontAwesomeIcon icon={faSpinner}></FontAwesomeIcon></Link>
            </div>
        </div>
    );
};

export default ServicesSection;