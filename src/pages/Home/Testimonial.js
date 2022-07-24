import React from 'react';
import people1 from '../../assets/images/people1.png'
import quote from "../../assets/icons/quote.svg";

const Testimonial = () => {
    return (
      <div className="p-6">
        <div className="flex justify-between items-center">
          <div>
            <h4 className="font-bold text-primary">Testimonial</h4>
            <h1 className="text-3xl">What Our Patients Says</h1>
          </div>
          <div>
            <img src={quote} className="h-36" alt="" />
          </div>
        </div>
        <div className="flex mt-20">
          <div className="w-9/12 m-10 p-3  rounded shadow-xl">
            <p>
              It is a long established fact that by the readable content of a
              lot layout. The point of using Lorem a more-or-less normal
              distribu to using Content here, content
            </p>
            <div className="flex items-center mt-4">
              <img
                className="h-20 rounded-full p-px  border-4 border-primary border-spacing-1"
                src={people1}
                alt=""
              />
              <div className="mx-4">
                <h5 className="font-bold">Winson Herry</h5>
                <p>California</p>
              </div>
            </div>
          </div>
          <div className="shadow-xl w-9/12 m-10 p-3 rounded ">
            <p>
              It is a long established fact that by the readable content of a
              lot layout. The point of using Lorem a more-or-less normal
              distribu to using Content here, content
            </p>
            <div className="flex items-center mt-4">
              <img
                className="h-20 rounded-full p-px  border-4 border-primary border-spacing-1"
                src={people1}
                alt=""
              />
              <div className="mx-4">
                <h5 className="font-bold">Winson Herry</h5>
                <p>California</p>
              </div>
            </div>
          </div>
          <div className="shadow-xl w-9/12 m-10 p-3 rounded  ">
            <p>
              It is a long established fact that by the readable content of a
              lot layout. The point of using Lorem a more-or-less normal
              distribu to using Content here, content
            </p>
            <div className="flex items-center mt-4">
              <img
                className="h-20 rounded-full p-px  border-4 border-primary border-spacing-1"
                src={people1}
                alt=""
              />
              <div className="mx-4">
                <h5 className="font-bold">Winson Herry</h5>
                <p>California</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Testimonial;