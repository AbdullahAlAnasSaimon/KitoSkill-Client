import React from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = ({courses}) => {
  const {name, id} = courses;
  return (
    <div>
      <Link to={`/courses/${id}`}><h2>{name}</h2></Link>
    </div>
  );
};

export default LeftSideNav;