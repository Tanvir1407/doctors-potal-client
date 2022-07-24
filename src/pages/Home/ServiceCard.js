import React from 'react';

const ServiceCard = ({img , title}) => {
    return (
      <div className='m-2'>
        <div class="card border border-2 shadow-md bg-base-100 shadow-xl">
          <figure class="px-2 pt-2">
            <img
              src={img}
              alt="Shoes"
              class="rounded-xl p-5"
            />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">{title}</h2>
            <p className='font-bold text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, quia!</p>
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;