import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMugHot, faHeart } from '@fortawesome/free-solid-svg-icons';
import cupImage from '../../resourses/img/cup.png';

const HeroSection = () => {
    return (
        <div className="hero py-10 bg-light">
            <div className="hero-content py-20 px-10 bg-slate-200 rounded-lg shadow-lg flex-col lg:flex-row-reverse">
                <div className="w-1/2 flex flex-row justify-end">
                    <div className='custom-container-1'>
                        <img src={cupImage} alt="" />
                    </div>
                </div>
                <div className='w-1/2'>
                    <h1 className="text-5xl font-bold">Welcome to<br/>CoffeeTreat Shop!</h1>
                    <h3 className='text-2xl font-bold text-primary pt-3'>"<FontAwesomeIcon icon={faMugHot}></FontAwesomeIcon> Coffee smells like freshly ground heaven."</h3>
                    <p className="py-6">Ah, coffee. Whether you're cradling a travel mug on your way to work or dashing out after spin class to refuel with a skinny latte, it's hard to imagine a day without it. The caffeine perks you up, and there's something incredibly soothing about sipping a steaming cup of joe.</p>
                    <div className='flex flex-row justify-start'>
                        <button className="btn btn-primary mr-2 border-primary"><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>&nbsp;Book a Table</button>
                        <button className="btn bg-transparent border-primary text-primary hover:bg-primary hover:text-white hover:border-slate-200">All Services</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;