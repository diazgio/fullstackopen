import React from 'react';
import Part from './Part';
import Total from './Total';

const Content = ({ parts }) => {
  const partsArray = Array.from(parts);
  return (
    <div>
      {partsArray.map((part) => (
        <Part key={part.id} part={part} />
      ))}
      <Total parts={partsArray} />
    </div>
  );
};

export default Content;
