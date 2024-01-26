import React from 'react';
import StatisticLine from './StatisticLine';

const Statistics = (props) => {
  const { good, neutral, bad, all, average, positive } = props;
  if (all.length === 0) {
    return (
      <>
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </>
    );
  }else {
    return (
      <>
        <h2>Statistics</h2>
        <table>
          <tbody>
            <StatisticLine text="Good" value={good} />
            <StatisticLine text="Neutral" value={neutral} />
            <StatisticLine text="Bad" value={bad} />
            <StatisticLine text="All" value={all.length} />
            <StatisticLine text="Average" value={average} />
            <StatisticLine text="Positive" value={positive + ' %'} />
          </tbody>
        </table>
      </>
    );  
  }
};

export default Statistics;
