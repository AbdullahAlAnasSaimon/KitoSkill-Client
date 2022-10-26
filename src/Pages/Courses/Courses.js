import React from 'react';

const Courses = ({courses}) => {
  const {author, duration, id, name, photo, price, seats} = courses;
  return (
    <div className='border-2 my-5'>
      <h2>{name}</h2>
      <img src={photo} alt="" />
      <p>{author}</p>
      <p>{duration}</p>
      <p>{price}</p>
      <p>{seats}</p>
      <button>View Details</button>
    </div>
  );
};

export default Courses;