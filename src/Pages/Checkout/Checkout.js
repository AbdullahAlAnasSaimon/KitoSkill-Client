import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaCalendar, FaClock, FaUserFriends, FaDollarSign } from 'react-icons/fa';
import toast from 'react-hot-toast';

const Checkout = () => {
  const CourseDetails = useLoaderData();
  const { name, duration, photo, price, seats, startingDate } = CourseDetails;
  
  const handleCheckout = () =>{
    toast.success('Order Complete');
  }

  return (
    <div className='w-11/12 mx-auto'>
      <div className='my-7 py-5 rounded-md bg-violet-200/50'>
        <h2 className='text-center text-3xl font-bold my-3'>Checkout</h2>
      </div>
      <div className='flex flex-col-reverse md:flex-row w-11/12 mx-auto'>
        <div className='w-full md:w-7/12 md:px-10 md:py-3'>
          <form className='p-8 my-5'>
            <div className='my-5'>
              <input className='border-b-2 w-full p-2 focus:border-violet-500 outline-0 duration-200 ease-in-out' type="text" placeholder='Full Name' required />
            </div>
            <div className='my-5'>
              <input className='border-b-2 w-full p-2 focus:border-violet-500 outline-0 duration-200 ease-in-out' type="email" placeholder='Email Address' required />
            </div>
            <div className='my-5'>
              <input className='border-b-2 w-full p-2 focus:border-violet-500 outline-0 duration-200 ease-in-out' type="text" placeholder='Address' required />
            </div>
            <div className='my-5 flex justify-between'>
              <div>
                <select className="select w-full max-w-xs border-2 border-violet-500">
                  <option disabled selected>Country</option>
                  <option>Bangladesh</option>
                </select>
              </div>
              <div>
                <select className="select w-full max-w-xs border-2 border-violet-500">
                  <option disabled selected>City/State</option>
                  <option>Dhaka</option>
                  <option>Chittagong</option>
                  <option>Lakshmiput</option>
                  <option>Rajshahi</option>
                  <option>Khulna</option>
                </select>
              </div>
              <div>
                <select className="select w-full max-w-xs border-2 border-violet-500">
                  <option disabled selected>Payment Method</option>
                  <option>bKash</option>
                  <option>Nogod</option>
                  <option>Mobile Banking</option>
                </select>
              </div>
            </div>
            <div className='my-5'>
              <input className='border-b-2 w-full p-2 focus:border-violet-500 outline-0 duration-200 ease-in-out' type="number" placeholder='Phone Number (Optional)'/>
            </div>
            <button onClick={handleCheckout} className='bg-indigo-400 hover:bg-indigo-500 py-3 w-full my-8 rounded-md font-semibold' type="submit">Checkout</button>
          </form>
        </div>
        <div className='w-full md:w-5/12 mb-10 md:mb-0'>
          <img id='course-thumb' className='w-6/12 mx-auto' src={photo} alt="Course Thumbnail" />
          <div className='px-10'>
            <p className='font-bold text-2xl text-gray-700'>{name}</p>
            <div className='flex justify-between items-center my-5 text-lg'>
              <p className='font-semibold text-gray-600'>Start From: </p>
              <div className='flex items-center justify-end text-gray-600 text-lg'>
                <p className='font-bold'>{startingDate}</p>
                <FaCalendar className='w-4 ml-2' />
              </div>
            </div>
            <div className='flex justify-between items-center my-5 text-lg'>
              <div className='flex items-center text-gray-600'>
                <FaClock className='w-4 mr-2' />
                <p className='font-semibold'>{duration} hrs</p>
              </div>
              <div className='flex items-center text-gray-600'>
                <FaUserFriends className='w-5 mr-2' />
                <p className='font-semibold'>{seats}</p>
              </div>
            </div>
            <div className='flex justify-between items-center my-5'>
              <p className='text-xl font-semibold text-gray-600'>Total Price: </p>
              <div className='flex items-center justify-end text-violet-700 text-xl'>
                <FaDollarSign className='w-4 mr-1' />
                <p className='font-bold'>{price}</p>
              </div>
            </div>
            <div className='my-5 flex'>
              <input className='border-2 rounded-md p-2 w-8/12 focus:border-violet-500 outline-0 duration-200 ease-in-out' type="password" placeholder='Apply Coupon' />
              <button className='w-4/12 bg-indigo-400 hover:bg-indigo-500 px-5 ml-2 rounded-md font-semibold' type="submit">Apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;