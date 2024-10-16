import React from 'react';
import Clients from '../components/Clients';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Services from '../components/Services';
import SubscriptionPlans from '../components/SubscriptionPlans'; // Import the new component

const Home = () => {
    return (
        <>
            <Hero />
            <Intro />
            <Services />
            <SubscriptionPlans /> {/* Add the SubscriptionPlans component here */}
            <Clients />
            <Cta />
            <Footer />
        </>
    );
}

export default Home;
