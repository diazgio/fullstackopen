import { useState } from 'react';
import './App.css';
import Button from './Button';
import Display from './Display';

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState([]);
  const goodPoints = 1;
  const neutralPoints = 0;
  const badPoints = -1; 

  const handleGoodClick = () => {
    setAll(all.concat('G'));
    setGood(good + 1);
  }

  const handleNeutralClick = () => {
    setAll(all.concat('N'));
    setNeutral(neutral + 1);
  }

  const handleBadClick = () => {
    setAll(all.concat('B'));
    setBad(bad + 1);
  }

  let average = 0;
  let positive = 0;
  if (all.length > 0) {
    average = ((parseInt(good) * goodPoints) + (parseInt(neutral) * neutralPoints) + (parseInt(bad) * badPoints)) / 3;
    positive = good / all.length * 100;
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <div className='container'>
        <Button onClick={handleGoodClick} text="Good" />
        <Button onClick={handleNeutralClick} text="Neutral" />
        <Button onClick={handleBadClick} text="Bad" />
      </div>
      <h2>Statistics</h2>
      <div>
        <Display text="Good" value={good} />
        <Display text="Neutral" value={neutral} />
        <Display text="Bad" value={bad} />
        <Display text="All" value={all.length} />
        <Display text="Average" value={average} />
        <Display text="Positive" value={positive + ' %'} />
      </div>
    </div>
  )
}

export default App