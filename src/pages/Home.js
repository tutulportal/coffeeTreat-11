import React from 'react';
import HeroSection from '../components/Sections/HeroSection';
import ServicesSection from '../components/Sections/ServicesSection';

const Home = () => {
    return (
        <section>
            {/* hero section */}
            <HeroSection></HeroSection>

            {/* categories / services */}
            <ServicesSection></ServicesSection>
        </section>
    );
};

export default Home;