import React from 'react';
import CardInfo from './CardInfo';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {
    
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:p-10">
        <CardInfo
          bgClr="bg-gradient-to-r from-secondary to-primary"
          cardTitle="Opening Hours"
          img={clock}
        ></CardInfo>
        <CardInfo
          bgClr="bg-accent"
          cardTitle="Visit our location"
          img={marker}
        ></CardInfo>
        <CardInfo
          bgClr="bg-gradient-to-r from-secondary to-primary"
          cardTitle="Contact us now"
          img={phone}
        ></CardInfo>
      </div>
    );
};

export default Info;