import React from 'react';
import '../assets/styles/components/Person.css';

const Person = ({ name, number }) => {
  return (
    <div className='container-person'>
      <p>{name}</p>
      <p>{number}</p>
    </div>
  );
};

export default Person;
