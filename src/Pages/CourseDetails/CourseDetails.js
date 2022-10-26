import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
  const singleCourseDetails = useLoaderData();
  // console.log(singleCourseDetails);
  const {author, details, duration, name, photo, price, seats, startingDate} = singleCourseDetails;
  return (
    <div>
      <img src={photo} alt="" />
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