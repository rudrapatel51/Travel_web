import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  const [priceValue, setPriceValue] = useState(40);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCities, setFilteredCities] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const cities = ['Manali', 'Shimla', 'Dharamshala', 'Ooty', 'Goa', 'Mysore', 'Agra', 'Delhi', 'Mumbai', 'Chennai', 'Kolkata', 'Pune'];

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const filtered = cities.filter(city => city.toLowerCase().includes(searchTerm.toLowerCase()));
      setFilteredCities(filtered);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  }, [searchTerm]);

  const handleCityClick = (city) => {
    setSearchTerm(city);
    setShowSuggestions(false);
  };

  return (
    <div className='bg-black/20 h-full'>
      <div className='h-full flex justify-center items-center p-4 bg-primary/10'>
        <div className='container grid grid-cols-1 gap-4'>
          {/* basic text */}
          <div data-aos="fade-up" className='text-white'>
            <p>Our Packages</p>
            <p className='font-bold text-3xl'>Search Your Destination</p>
          </div>
          {/* Form of search */}
          <div data-aos="fade-up" className='space-y-4 bg-white rounded-md p-4 relative'>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 py-3'>
              <div className='relative'>
                <label htmlFor='destination' className='opacity-70'>Search Your Destination</label>
                <input
                  type='text'
                  name='destination'
                  id='destination'
                  placeholder='Manali'
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className='w-full bg-gray-100 my-2 range accent-primary focus:outline-primary focus:outline outline-1 rounded-full p-2'
                />
                {showSuggestions && (
                  <div className='absolute bg-white border border-gray-300 rounded-md w-full mt-1 max-h-60 overflow-y-auto'>
                    {filteredCities.map((city, index) => (
                      <div
                        key={index}
                        className='p-2 hover:bg-gray-200 cursor-pointer'
                        onClick={() => handleCityClick(city)}
                      >
                        {city}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div>
                <label htmlFor='date' className='opacity-70'>Date</label>
                <input
                  type='date'
                  name='date'
                  id='date'
                  className='w-full !placeholder-slate-400 bg-gray-100 my-2 rounded-full focus:outline-primary focus:outline outline-1 p-2'
                />
              </div>
              <div>
                <label className='opacity-70 block' htmlFor='price'>
                  <div className='w-full flex justify-between items-center'>
                    <p>Max Price</p>
                    <p className='font-bold text-xl'>${priceValue}</p>
                  </div>
                </label>
                <div className='bg-gray-100 rounded-full p-2 flex items-center justify-center'>
                  <input
                    type='range'
                    name='price'
                    id='price'
                    className='appearance-none w-full bg-gradient-to-r from-primary to-secondary h-2 rounded-full my-2'
                    min="150"
                    max="1000"
                    value={priceValue}
                    step="10"
                    onChange={(e) => setPriceValue(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <button className='bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 px-4 py-2 rounded-full duration-200 absolute -bottom-5 left-1/2 -translate-x-1/2'>
              Search Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
