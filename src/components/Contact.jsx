import React from "react";
import { useState } from 'react';

const Contact = () => {

  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  }

  const [formDetails, setFormDetails] = useState(formInitialDetails);

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = () => {
    formDetails.firstName = '';
    formDetails.lastName = '';
    formDetails.email = '';
    formDetails.message = '';
  }

  return (
    <div
      name="contact"
      className="w-full h-auto bg-gradient-to-b from-black to-gray-800 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="py-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6 font-light">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/129085d1-10be-449c-9316-6a13ce0ab618"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              value={formDetails.firstName}
              onChange={(e) => onFormUpdate('firstName', e.target.value)}
              name="name"
              placeholder="First Name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none font-normal"
            />
            <input
              type="text"
              value={formDetails.lastName}
              onChange={(e) => onFormUpdate('lastName', e.target.value)}
              name="name"
              placeholder="Last Name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none font-normal mt-4"
            />
            <input
              type="email"
              value={formDetails.email}
              onChange={(e) => onFormUpdate('email', e.target.value)}
              name="name"
              placeholder="Email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none font-normal"
            />
            <textarea
              name="message"
              value={formDetails.message}
              onChange={(e) => onFormUpdate('message', e.target.value)}
              placeholder="Message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none font-normal max-h-72 min-h-full"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
