import React from 'react';
import AllServices from '../components/Sections/AllServices';
import { useLoaderData } from 'react-router-dom';

const Services = () => {
    const services = useLoaderData()
    return (
        <section>
            {/* All Services Section */}
            <AllServices services={services}></AllServices>
        </section>
    );
};

export default Services;