import React from "react";
import appointment from "../../assets/images/appointment.png";

const ContactUs = () => {
  return (
    <div
      className="text-center  my-10 "
      style={{ background: `url(${appointment})` }}
    >
      <div className="py-12">
        <h4 className="text-primary font-bold">Contact Us</h4>
        <p className="text-3xl text-white">Stay connected with us</p>
        <form className="my-6">
          <input
            className="m-2 rounded p-1.5 w-72"
            type="email"
            name="email"
            id="1"
            placeholder="Email Address"
          />{" "}
          <br />
          <input
            className="m-2 p-1.5 rounded w-72"
            type="text"
            name="text"
            placeholder="Subject"
            id="2"
          />{" "}
          <br />
          <textarea
            className="m-2 p-1.5 rounded"
            name="massage"
            id="22"
            cols="35"
            rows="6"
            placeholder="Your message"
          ></textarea>
        </form>
        <button className="bg-gradient-to-r from-secondary to-primary btn btn-primary uppercase text-white font-bold">
          submit
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
