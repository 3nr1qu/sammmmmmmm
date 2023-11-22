/* eslint-disable react-hooks/rules-of-hooks */

import React, { useState } from "react";
import bgimage from "../../../Assets/appo.png";
const Appointment = () => {
  
  const [dateTime, setDateTime] = useState('');
  return (
    <>
    
   <div
      className="bg-cover"
      style={{ backgroundImage: `url(${bgimage})` }}
    >
         <div className="w-full flex items-start ">
        <div className="w-1/2 relative flex flex-col">
      <form className="w-full max-w-lg mx-auto">
        <div className="flex flex-wrap text-center -mx-3 mb-6">
          <h1 className="text-center font-bold text-2xl p-10 mt-10">
            SCHEDULE AN APPOINTMENT NOW!
          </h1>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-first-name"
              type="text"
              placeholder="John"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Doe"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-city"
            >
              Contact #
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="text"
              placeholder="09077629355"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-state"
            >
              Email Address
            </label>
            <div className="relative">
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-city"
                type="text"
                placeholder="John@gmail.com"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Address
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="password"
            />
            <p className="text-gray-600 text-xs italic">Street Address</p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="text"
              placeholder="Bogtongbod"
            />
            <p className="text-gray-600 text-xs italic mb-2">Barangay</p>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <div className="relative">
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-city"
                type="text"
                placeholder="Bohol"
              />
              <p className="text-gray-600 text-xs italic mb-2">Province</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="text"
              placeholder="6330"
            />
            <p className="text-gray-600 text-xs italic">
              Postal Code/ Zip Code
            </p>
          </div>
        </div>
        <div className="w-full md:w-full py-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-zip"
          >
            What date and time do you want to schedule an appointment with us?
          </label>
          <input
          type="datetime-local"
          placeholder="Date and Time"
          value={dateTime}
          onChange={(e) => setDateTime(e.target.value)}
          className="border border-gray-400 mb-4 p-2 w-full"
        />
        </div>
        <div className="w-full md:w-full py-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-zip"
          >
            What services are you interested in?
          </label>
          <textarea
            id="message"
            name="message"
            className="appearance-none h-32 block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          ></textarea>
        </div>
        <div className="lex flex-wrap text-center -mx-3 mb-6">
          <button
            type="submit"
            className="w-full h-9 mx-20 max-w-[150px] bg-[#228B22] hover:bg-neutral-500 cursor-pointer m-auto text-white text-lg rounded-full"
          >
            Submit
          </button>
        </div>
      </form>
      </div>
      </div>
      </div>
    </>
  );
};

export default Appointment;
