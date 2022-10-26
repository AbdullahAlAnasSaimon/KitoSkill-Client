import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
  const singleCourseDetails = useLoaderData();
  console.log(singleCourseDetails);
  return (
    <div>
      <h2>Course details route</h2>
    </div>
  );
};

export default CourseDetails;