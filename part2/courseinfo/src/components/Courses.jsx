import React from 'react';
import Header from './Header';
import Content from './Content';

const Courses = (props) => {
  const {id, name} = props.courses;
  return (
    <>
      <div key={id}>
        <Header name={name} />
        <Content parts={props.courses.parts} />
      </div>
    </>
  );
};

export default Courses;
