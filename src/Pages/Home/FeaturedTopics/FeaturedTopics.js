import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const FeaturedTopics = () => {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/topics')
      .then(res => res.json())
      .then(data => setTopics(data))
  }, []);

  return (
    <div className='w-10/12 mx-auto mt-20'>
      <h1 className='text-3xl text-center font-bold mt-24 mb-16'>Featured topics</h1>
      <div className='grid grid-cols-3 gap-6'>
        {
          topics.map(topic => <TopicName
            key={topic.id}
            topic={topic}
          ></TopicName>)
        }
      </div>
    </div>
  );
};

const TopicName = ({ topic }) => {
  return (
    <Link to={`/courses/${topic?.id}`}>
      <div className='text-lg text-center py-3 border-2 border-transparent hover:border-violet-200 bg-violet-50 rounded-md'>
        <h2>{topic?.topic}</h2>
      </div>
    </Link>
  );
}

export default FeaturedTopics;