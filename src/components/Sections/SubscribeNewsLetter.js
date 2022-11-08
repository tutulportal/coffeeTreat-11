import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const SubscribeNewsLetter = () => {
    return (
        <div className='flex flex-col justify-center items-center custom-bg-newsletter py-20'>
            <div className="flex flex-col justify-center items-center">
                <h1 className='text-5xl font-bold text-primary py-4'>Subscribe to our newsletter</h1>
                <p className='text-center text-black font-light text-sm tracking-wider mb-3'>By submitting your email be our subscriber so that<br/> you will get regular update from our shop.</p>
                <div className="form-control">
                    <div className="input-group">
                        <input type="email" placeholder="name@email.com" className="input input-bordered" />
                        <button className="btn btn-square">
                            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                        </button>
                    </div>
                </div>
                <p className='text-secondary text-sm font-thin tracking-widest mt-3'>* We don't share your personal info with anyone. Check out our <span className='font-bold'>Privacy Policy</span> for more information.</p>
            </div>
        </div>
    );
};

export default SubscribeNewsLetter;