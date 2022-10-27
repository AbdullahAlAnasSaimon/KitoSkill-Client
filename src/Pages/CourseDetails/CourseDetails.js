import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
  const singleCourseDetails = useLoaderData();
  const { author, details, duration, name, photo, price, seats, startingDate } = singleCourseDetails;

  /* window.addEventListener("scroll", () => {
    let windowY = window.scrollY;
    if(windowY >= 100){
      document.getElementById('course-thumb').style.display = 'none';
    }
  }) */

  return (
    <div className='flex'>
      <div className='w-7/12'>
        <h2>{name}</h2>
        <p>{details}</p>
        <p>{author}</p>
      </div>
      <div className='w-5/12'>
        <img id='course-thumb' className='w-6/12 mx-auto' src={photo} alt="Course Thumbnail"/>
        <p>{duration}</p>
        <p>{price}</p>
        <p>{seats}</p>
        <p>{startingDate}</p>
        <Link to='/checkout'><button>Get Premium Access</button></Link>
      </div>
    </div>
  );
};

export default CourseDetails;