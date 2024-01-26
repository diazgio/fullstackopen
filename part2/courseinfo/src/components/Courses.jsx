import React from 'react';
import Header from './Header';
import Content from './Content';

const Courses = ({ courses }) => {
  const coursesArray = Array.from(courses);
  return (
    <>
      {coursesArray.map((course) => (
        <div key={course.id}>
          <Header name={course.name} />
          <Content parts={course.parts} />
        </div>
      ))}
    </>
  );
};

export default Courses;
