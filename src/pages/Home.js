import React from 'react';
import CounterSection from '../components/Sections/CounterSection';
import HeroSection from '../components/Sections/HeroSection';
import ServicesSection from '../components/Sections/ServicesSection';
import SubscribeNewsLetter from '../components/Sections/SubscribeNewsLetter';
import { useLoaderData } from 'react-router-dom';
import UseTitle from './../customHooks/UseTitle';

const Home = () => {
    UseTitle('Home');
    const servicesDatas = useLoaderData();
    return (
        <section>
            {/* hero section */}
            <HeroSection></HeroSection>

            {/* categories / services */}
            <ServicesSection services={servicesDatas}></ServicesSection>

            {/* counter section */}
            <CounterSection></CounterSection>

            {/* subscribe newsletter */}
            <SubscribeNewsLetter></SubscribeNewsLetter>

        </section>
    );
};

export default Home;