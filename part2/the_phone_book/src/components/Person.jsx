import React from 'react';
import personService from '../services/personService';
import '../assets/styles/components/Person.css';

const Person = ({ name, number, handleDelete, id }) => {
  
  return (
    <div className='container-person' >
      <p>{name}</p>
      <p>{number}</p>
      <button onClick={handleDelete} id={id}>Delete</button>
    </div>
  );
};

export default Person;
