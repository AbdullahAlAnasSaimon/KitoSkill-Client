import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Courses from '../Courses/Courses';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const AllCourses = () => {
  const allCourses = useLoaderData();
  return (
    <div className='w-11/12 mx-auto'>
      <h2 className='text-center text-2xl'>Courses</h2>
      <p className='text-center'>Total Course Found : {allCourses.length}</p>
      <div className='grid grid-cols-[200px_minmax(900px,_1fr)]'>
        <div>
          {
            allCourses.map(courses => <LeftSideNav
            key={courses.id}
            courses={courses}
            ></LeftSideNav>)
          }
        </div>
        <div className='grid grid-cols-3 gap-6 w-11/12 mx-auto'>
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