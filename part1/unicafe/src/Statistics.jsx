import React from 'react';
import Display from './Display';

const Statistics = (props) => {
  const { good, neutral, bad, all, average, positive } = props;
  return (
    <>
      <h2>Statistics</h2>
      <Display text="Good" value={good} />
      <Display text="Neutral" value={neutral} />
      <Display text="Bad" value={bad} />
      <Display text="All" value={all.length} />
      <Display text="Average" value={average} />
      <Display text="Positive" value={positive + ' %'} />
    </>
  );
};

export default Statistics;
