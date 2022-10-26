import React from 'react';

const LeftSideNav = ({courses}) => {
  const {name} = courses;
  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
};

export default LeftSideNav;