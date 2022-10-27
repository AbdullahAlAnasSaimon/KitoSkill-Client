import React from 'react';
import ErrorImg from '../../images/404.gif'

const Error = () => {
  return (
    <div>
      <img className='w-8/12 mx-auto' src={ErrorImg} alt="" />
    </div>
  );
};

export default Error;