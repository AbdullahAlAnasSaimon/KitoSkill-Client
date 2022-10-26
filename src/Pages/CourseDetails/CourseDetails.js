import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
  const singleCourseDetails = useLoaderData();
  const { author, details, duration, name, photo, price, seats, startingDate } = singleCourseDetails;

  window.addEventListener("scroll", () => {
    let windowY = window.scrollY;
    if(windowY >= 100){
      document.getElementById('course-thumb').style.display = 'none';
    }
  })
  
  return (
    <div>
      <div className='w-6/12'>
        <img id='course-thumb' className='w-6/12' src={photo} alt="" />
      </div>
      <h2>{name}</h2>
      <p>{details}</p>
      <p>{duration}</p>
      <p>{price}</p>
      <p>{seats}</p>
      <p>{startingDate}</p>
      <p>{author}</p>
      <Link to='/checkout'><button>Get Premium Access</button></Link>
    </div>
  );
};

export default CourseDetails;