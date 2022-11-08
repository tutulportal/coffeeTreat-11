import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBellConcierge, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
    return (
        <div className="bg-light w-full flex flex-col justify-center items-center mt-10 mb-20">
            <h1 className='text-4xl font-bold text-primary mb-5'><FontAwesomeIcon icon={faBellConcierge}></FontAwesomeIcon> Our Services</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                        Shoes!
                        <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div> 
                            <div className="badge badge-outline">Products</div>
                        </div>
                        <div className="flex flex-row justify-center items-center pt-4">
                            <button className='btn btn-primary w-full'>Get One</button>
                        </div>
                    </div>
                </div>
                
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                        Shoes!
                        <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div> 
                            <div className="badge badge-outline">Products</div>
                        </div>
                        <div className="flex flex-row justify-center items-center pt-4">
                            <button className='btn btn-primary w-full'>Get One</button>
                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                        Shoes!
                        <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div> 
                            <div className="badge badge-outline">Products</div>
                        </div>
                        <div className="flex flex-row justify-center items-center pt-4">
                            <button className='btn btn-primary w-full'>Get One</button>
                        </div>
                    </div>
                </div>

            </div>
            <div className="flex flex-row justify-center items-center pt-10">
                <Link to="/services" className='btn btn-primary bg-transparent text-primary hover:text-white'>View More&nbsp;<FontAwesomeIcon icon={faSpinner}></FontAwesomeIcon></Link>
            </div>
        </div>
    );
};

export default ServicesSection;