import React, { useContext, useState } from 'react';
import { OrderPopupContext } from '../../Hooks/OrderPopupProvider';
import { IoCloseOutline } from 'react-icons/io5';
import axios from 'axios';

const FormPopup = () => {
  const { orderPopup, setOrderPopup } = useContext(OrderPopupContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://sheetdb.io/api/v1/y011x4s7q6wxc', formData);
      if (response.status === 201) {
        alert('Booking successful!');
        setOrderPopup(false);
      } else {
        alert('Something went wrong, please try again.');
      }
    } catch (error) {
      console.error('Error sending data:', error);
      alert('Error sending data, please try again.');
    }
  };

  return (
    <>
      {orderPopup && (
        <div className='h-screen w-screen fixed top-0 left-0 border border-black z-50 backdrop-blur-sm'>
          <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-md w-[300px]'>
            {/* header */}
            <div className='flex items-center justify-between'>
              <div>
                <h1>Book Your Trip</h1>
              </div>
              <div>
                <IoCloseOutline className='text-2xl cursor-pointer' onClick={() => setOrderPopup(false)} />
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className='mt-4'>
                <input
                  type='text'
                  name='name'
                  placeholder='Name'
                  value={formData.name}
                  onChange={handleChange}
                  className='w-full rounded-full border border-gray-300 px-2 py-1 mb-4'
                />
                <input
                  type='text'
                  name='email'
                  placeholder='Email'
                  value={formData.email}
                  onChange={handleChange}
                  className='w-full rounded-full border border-gray-300 px-2 py-1 mb-4'
                />
                <input
                  type='text'
                  name='address'
                  placeholder='Address'
                  value={formData.address}
                  onChange={handleChange}
                  className='w-full rounded-full border border-gray-300 px-2 py-1 mb-4'
                />
                <input
                  type='text'
                  name='phone'
                  placeholder='Phone No'
                  value={formData.phone}
                  onChange={handleChange}
                  className='w-full rounded-full border border-gray-300 px-2 py-1 mb-4'
                />
                <div className='flex items-center justify-center'>
                  <button type='submit' className='px-4 py-2 bg-blue-500 text-white rounded-full'>
                    Book Now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default FormPopup;
