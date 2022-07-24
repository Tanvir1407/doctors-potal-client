import React from 'react';
import Footer from '../Shared/Footer';
import AppointmentFeature from './AppointmentFeature';
import Banner from './Banner';
import ContactUs from './ContactUs';
import Features from './Features';
import Info from './Info';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Features></Features>
            <AppointmentFeature></AppointmentFeature>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;