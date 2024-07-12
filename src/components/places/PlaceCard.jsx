import React from 'react';
import { Slide } from 'react-reveal';

const PlaceCard = ({ id, title, description, imageUrl, link, price }) => {
  return (
    <>
    <Slide left>
    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 p-5">
      <div className="relative max-w-sm rounded-lg shadow-lg bg-gray-800 border border-gray-700 transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <a href={link}>
          <img className="rounded-t-lg hover:skew-x-2 transition duration-300" src={imageUrl} alt={title} />
        </a>
        <div className="p-5 bg-[#D6EFD8] bg-opacity-75 rounded-b-lg">
          <a href={link}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">{title}</h5>
          </a>
          <p className="mb-3 font-normal text-black">{description}</p>
          <p className="mb-3 text-xl font-bold text-black">₹{price}</p>
          <a href={link} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Book Now
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
        </div>
      </div>
    </div>
    </Slide>
    </>
  );
};

export default PlaceCard