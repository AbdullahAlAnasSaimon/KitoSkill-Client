import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaUserAlt, FaCalendar, FaClock, FaUserFriends, FaDollarSign } from 'react-icons/fa';

const CourseDetails = () => {
  const singleCourseDetails = useLoaderData();
  const { id, author, details, duration, name, photo, price, seats, startingDate, content } = singleCourseDetails;
console.log(singleCourseDetails);
  /* window.addEventListener("scroll", () => {
    let windowY = window.scrollY;
    if(windowY >= 100){
      document.getElementById('course-thumb').style.display = 'none';
    }
  }) */

  return (
    <div className='flex flex-col-reverse md:flex-row w-11/12 mx-auto'>
      <div className='w-full md:w-7/12 md:px-10 md:py-3'>
        <h2 className='text-3xl lg:text-5xl font-bold'>{name}</h2>
        <div className='flex items-center text-gray-500 my-5 text-xl'>
          <FaUserAlt className='w-7 h-7 p-1 mr-2 border-2 rounded-full' />
          <p className='font-semibold'>{author}</p>
        </div>
        <p>{details}</p>
        <div className="overflow-x-auto">
          <h2 className='my-8 text-2xl font-bold'>Course Content</h2>
          <table className="table w-full z-0">
            <tbody className='border'>
              {content.map(c => <tr><th className='font-semibold'>{c}</th></tr>)}
            </tbody>
          </table>
        </div>
      </div>
      <div className='w-full md:w-5/12 mb-10 md:mb-0'>
        <img id='course-thumb' className='w-6/12 mx-auto' src={photo} alt="Course Thumbnail" />
        <div className='px-10'>
          <div className='flex justify-between items-center my-5'>
            <p className='text-xl font-semibold text-gray-600'>Price: </p>
            <div className='flex items-center justify-end text-violet-700 text-xl'>
              <FaDollarSign className='w-4 mr-1' />
              <p className='font-bold'>{price}</p>
            </div>
          </div>
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
          <div>
            <Link to={`/checkout/${id}`}><button className='block bg-violet-500 hover:bg-violet-400 text-xl font-semibold text-white my-5 py-3 w-full rounded-md'>Get Premium Access</button></Link>
            <button className='block bg-indigo-500 hover:bg-indigo-400 text-xl font-semibold text-white my-5 py-3 w-full rounded-md'>Download PDF</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;