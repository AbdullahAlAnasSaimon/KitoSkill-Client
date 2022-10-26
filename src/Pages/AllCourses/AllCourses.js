import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Courses from '../Courses/Courses';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const AllCourses = () => {
  const allCourses = useLoaderData();
  console.log(allCourses);
  return (
    <div className=''>
      <h2>Courses : {allCourses.length}</h2>
      <div className='grid grid-cols-[300px_minmax(900px,_1fr)]'>
        <div className=''>
          {
            allCourses.map(courses => <LeftSideNav
            key={courses.id}
            courses={courses}
            ></LeftSideNav>)
          }
        </div>
        <div>
          {
            allCourses.map(courses => <Courses
              key={courses.id}
              courses={courses}
            ></Courses>)
          }
        </div>
      </div>
    </div>
  );
};

export default AllCourses;