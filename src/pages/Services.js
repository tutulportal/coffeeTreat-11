import React from 'react';
import AllServices from '../components/Sections/AllServices';
import { useLoaderData } from 'react-router-dom';
import UseTitle from './../customHooks/UseTitle';

const Services = () => {
    UseTitle('Services');
    const services = useLoaderData()
    return (
        <section>
            {/* All Services Section */}
            <AllServices services={services}></AllServices>
        </section>
    );
};

export default Services;