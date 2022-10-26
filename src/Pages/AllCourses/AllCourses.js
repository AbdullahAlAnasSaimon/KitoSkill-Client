import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Courses from '../Courses/Courses';

const AllCourses = () => {
  const allCourses = useLoaderData();
  console.log(allCourses);
  return (
    <div>
      <h2>Courses : {allCourses.length}</h2>
      {
        allCourses.map(courses => <Courses 
        key={courses.id}
        courses={courses}
        ></Courses>)
      }
    </div>
  );
};

export default AllCourses;