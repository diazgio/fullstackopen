import { useState } from 'react';
import './App.css';
import Button from './Button';
import Display from './Display';

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <div className='container'>
        <Button onClick={handleGoodClick} text="Good" />
        <Button onClick={handleNeutralClick} text="Neutral" />
        <Button onClick={handleBadClick} text="Bad" />
      </div>
      <h2>Statics</h2>
      <div>
        <Display text="Good" value={good} />
        <Display text="Neutral" value={neutral} />
        <Display text="Bad" value={bad} />
      </div>
    </div>
  )
}

export default App