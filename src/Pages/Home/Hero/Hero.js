import React from 'react';
import './Hero.css';
import HeroImg from '../../../images/Saly-19.png';

const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row justify-around items-center hero-bg h-[700px] md:h-[520px]'>
      <div className='w-10/12 md:w-5/12'>
        <h1 className='text-3xl md:text-5xl text-center md:text-left font-bold text-gray-700 my-6'>Unlock the power of learning that gets you.</h1>
        <p className='text-gray-500 mr-0 md:mr-10'>Learn programming, marketing, data science and more. Find the right instructor for you. Choose from many topics, skill levels, and languages.</p>
      </div>
      <div className='w-10/12 md:w-5/12'>
        <img className='w-auto md:w-11/12 -mt-10' src={HeroImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;