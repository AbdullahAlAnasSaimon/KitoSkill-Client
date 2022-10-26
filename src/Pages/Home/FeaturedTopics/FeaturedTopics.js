import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const FeaturedTopics = () => {
  const [topics, setTopics] = useState();
  useEffect(() => {
    fetch('http://localhost:5000/topics')
    .then(res => res.json())
    .then(data => setTopics(data))
  }, [])
  return (
    <div>
      <h1 className='text-3xl text-center font-bold my-16'>Featured topics</h1>
    </div>
  );
};

export default FeaturedTopics;