import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';

const AppointmentFeature = () => {
    return (
      <section
        style={{
          background: `url(${appointment})`,
        }}
        className="flex justify-center items-center "
      >
        <div className="flex-1 hidden md:block">
          <img className='mt-[-120px]' src={doctor} alt="" />
        </div>
        <div className="flex-1 text-white p-8 md:mx-20">
          <h3 className="text-xl text-primary text-bold my-4 font-bold">Appointment</h3>
          <h2 className="text-3xl mb-4">Make an Appointment Today</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            laudantium, et enim maiores explicabo dolorum, qui quasi minus ipsam
            neque ad, iure error veniam distinctio odio? Repellendus reiciendis,
            praesentium aliquam ab sapiente eum, ducimus, rem doloremque aut
            ipsum consequatur perferendis.
          </p>
          <button className="bg-gradient-to-r from-secondary to-primary btn btn-primary uppercase text-white font-bold mt-6">
            Get started
          </button>
        </div>
      </section>
    );
};

export default AppointmentFeature;