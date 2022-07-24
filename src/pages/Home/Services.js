import React from 'react';
import ServiceCard from './ServiceCard';
import cavity from '../../assets/images/cavity.png';
import fluoride from '../../assets/images/fluoride.png';
import whitening from '../../assets/images/whitening.png';

const Services = () => {
    return (
        <div className='mt-10'>
            <h4 className='text-center text-primary text-xl font-bold'>our services</h4>
            <h2 className='text-center text-3xl'>Services We Provide</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 md:mx-20 mt-7'>
                <ServiceCard img={cavity} title="Fluoride Treatment"></ServiceCard>
                <ServiceCard img={fluoride} title="Cavity Filling"></ServiceCard>
                <ServiceCard img={whitening} title="Teeth Whitening"></ServiceCard>
            </div>
        </div>
    );
};

export default Services;