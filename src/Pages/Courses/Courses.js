import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt, FaClock, FaUserFriends, FaDollarSign } from 'react-icons/fa';

const Courses = ({ courses }) => {
  const { author, duration, id, name, photo, price, seats } = courses;
  return (
    <div className='bg-violet-50 border-2 border-violet-300/50 p-3 rounded-md w-auto'>
      <div className=' bg-violet-500/50 rounded-md w-auto'>
        <img className='w-auto mx-auto' src={photo} alt="" />
      </div>
      <h2 className='text-lg mt-3 mb-2 font-bold text-gray-700'>{name}</h2>
      <div className='flex items-center text-gray-500 my-1 text-sm'>
        <FaUserAlt className='w-3 mr-2' />
        <p className='font-semibold'>{author}</p>
      </div>
      <div className='flex justify-between items-center my-2 text-sm'>
        <div className='flex items-center text-gray-600'>
          <FaClock className='w-3 mr-2' />
          <p className='font-semibold'>{duration} hrs</p>
        </div>
        <div className='flex items-center text-gray-600'>
          <FaUserFriends className='w-4 mr-2' />
          <p className='font-semibold'>{seats}</p>
        </div>
      </div>
      <div className='flex justify-between items-center my-2'>
        <p className='text-xl font-semibold text-gray-600'>Price: </p>
        <div className='flex items-center justify-end text-violet-700 text-xl'>
          <FaDollarSign className='w-4 mr-1' />
          <p className='font-bold'>{price}</p>
        </div>
      </div>
      <Link to={`/courses/${id}`}><button className='bg-indigo-500 hover:bg-indigo-600 w-full py-2 mt-3 rounded-md text-white font-semibold'>View Details</button></Link>
    </div>
  );
};

export default Courses;