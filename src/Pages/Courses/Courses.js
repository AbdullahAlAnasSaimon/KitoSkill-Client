import React from 'react';
import { Link } from 'react-router-dom';

const Courses = ({courses}) => {
  const {author, duration, id, name, photo, price, seats} = courses;
  return (
    <div className='border-2 mb-5'>
      <h2>{name}</h2>
      <img src={photo} alt="" />
      <p>{author}</p>
      <p>{duration}</p>
      <p>{price}</p>
      <p>{seats}</p>
      <Link to={`/courses/${id}`}><button>View Details</button></Link>
    </div>
  );
};

export default Courses;