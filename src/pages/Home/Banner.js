import React from 'react';
import chair from '../../assets/images/chair.png';
import bg from '../../assets/images/bg.png';

const Banner = () => {
    const myStyle={
        backgroundImage:`url(${bg})`,
        height:'100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
      <div className='mb-20 lg:mb-0' style={myStyle}>
        <div class="hero min-h-screen">
          <div class="hero-content flex-col lg:flex-row-reverse">
            <img
              src={chair}
              className="max-w-lg rounded-lg shadow-2xl"
              alt="bg-img"
            />
            <div className="lg:w-1/2  p-8">
              <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
              <p class="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="bg-gradient-to-r from-secondary to-primary btn btn-primary uppercase text-white font-bold">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;