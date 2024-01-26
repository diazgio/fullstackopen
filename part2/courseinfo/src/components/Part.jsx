import React from 'react';
import '../assets/styles/components/Part.css';

const Part = ({ part }) => {
  return (
    <>
      <div className='container-part'>
        <p>{part.name}</p>
        <p>{part.exercises}</p>
      </div>
    </>
  );
};

export default Part;
