import React from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = ({courses}) => {
  const {name, id} = courses;
  return (
    <div className='mb-3 bg-violet-300/50 hover:bg-violet-200 py-2 px-2 rounded-md'>
      <Link to={`/courses/${id}`}><h2>{name}</h2></Link>
    </div>
  );
};

export default LeftSideNav;