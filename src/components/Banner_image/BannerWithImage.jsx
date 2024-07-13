import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './banner.css';

const BannerWithImage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div data-aos="flip-left">
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-primary to-secondary">
        <div className="container  mx-auto">
          <div className="flex flex-col md:flex-row items-center w-full p-6 bg-white rounded-lg shadow-lg">
            <div className="element w-full md:w-1/2 mb-4 md:mb-0">
              <img src="/tarvelimage.avif" alt="Travel" className="rounded-lg w-full" />
            </div>
            <div className="w-full md:w-1/2 md:pl-8 text-center md:text-left">
              <h1 className="text-2xl md:text-4xl font-bold">Explore all corners of The world with us</h1>
              <p className="mt-4 text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias
                quis magni at optio ratione ex alias quis magni at optio
              </p>
              <div className="flex flex-wrap justify-center md:justify-start mt-8 space-x-4">
                <div className="flex items-center space-x-2 mb-4 md:mb-0">
                  <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center">
                    <PlaneIcon className="w-4 h-4 text-purple-600" />
                  </div>
                  <span>Flight</span>
                </div>
                <div className="flex items-center space-x-2 mb-4 md:mb-0">
                  <div className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center">
                    <WifiIcon className="w-4 h-4 text-green-600" />
                  </div>
                  <span>Wi-fi</span>
                </div>
                <div className="flex items-center space-x-2 mb-4 md:mb-0">
                  <div className="w-8 h-8 bg-yellow-200 rounded-full flex items-center justify-center">
                    <HotelIcon className="w-4 h-4 text-yellow-600" />
                  </div>
                  <span>Hotel</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-red-200 rounded-full flex items-center justify-center">
                    <FishIcon className="w-4 h-4 text-red-600" />
                  </div>
                  <span>Foods</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerWithImage;

function FishIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z" />
      <path d="M18 12v.5" />
      <path d="M16 17.93a9.77 9.77 0 0 1 0-11.86" />
      <path d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33" />
      <path d="M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4" />
      <path d="m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98" />
    </svg>
  );
}

function HotelIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 22v-6.57" />
      <path d="M12 11h.01" />
      <path d="M12 7h.01" />
      <path d="M14 15.43V22" />
      <path d="M15 16a5 5 0 0 0-6 0" />
      <path d="M16 11h.01" />
      <path d="M16 7h.01" />
      <path d="M8 11h.01" />
      <path d="M8 7h.01" />
      <rect x="4" y="2" width="16" height="20" rx="2" />
    </svg>
  );
}

function PlaneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </svg>
  );
}

function WifiIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20h.01" />
      <path d="M2 8.82a15 15 0 0 1 20 0" />
      <path d="M5 12.859a10 10 0 0 1 14 0" />
      <path d="M8.5 16.429a5 5 0 0 1 7 0" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
