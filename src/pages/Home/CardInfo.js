import React from 'react';

const CardInfo = ({ img, cardTitle, bgClr }) => {
  return (
    <div>
      <div class={`card lg:card-side  shadow-xl ${bgClr}`}>
        <figure className="pl-5 pt-5">
          <img src={img} alt="Album" />
        </figure>
        <div className="card-body text-white">
          <h2 className="card-title">{cardTitle}</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;