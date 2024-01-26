import React from 'react';

const Total = ({ parts }) => {
  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <h2>
      <strong>Total exercises: {totalExercises}</strong>
    </h2>
  );
};

export default Total;
