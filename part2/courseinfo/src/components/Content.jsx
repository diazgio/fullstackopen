import React from 'react';
import Part from './Part';

const Content = ({ parts }) => {
  const partsArray = Array.from(parts);
  return (
    <div>
      {partsArray.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  );
};

export default Content;
