import React from 'react';
import CounterSection from '../components/Sections/CounterSection';
import HeroSection from '../components/Sections/HeroSection';
import ServicesSection from '../components/Sections/ServicesSection';
import SubscribeNewsLetter from '../components/Sections/SubscribeNewsLetter';

const Home = () => {
    return (
        <section>
            {/* hero section */}
            <HeroSection></HeroSection>

            {/* categories / services */}
            <ServicesSection></ServicesSection>

            {/* counter section */}
            <CounterSection></CounterSection>

            {/* subscribe newsletter */}
            <SubscribeNewsLetter></SubscribeNewsLetter>

        </section>
    );
};

export default Home;