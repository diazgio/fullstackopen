import { useState } from 'react';
import Button from './Button';
import Vote from './Vote';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  const handleVote = (e) => {
    e.preventDefault();
    const updatedVotes = [...votes];
    updatedVotes[selected] += 1;
    setVotes(updatedVotes);
  }
  
  const handleClick = (e) => {
    e.preventDefault();
    const newIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(newIndex);
  };
  
  const maxVotes = Math.max(...votes);
  const mostVotedAnecdotes = anecdotes.filter((_, index) => votes[index] === maxVotes);
  const mostVotedAnecdote = mostVotedAnecdotes[0]; // Select the first most voted anecdote
  
  return (
    <>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <div>
        <Vote handleVote={handleVote} />
        <Button handleClick={handleClick} />
      </div>
      {maxVotes >= 1 && (
        <>
          <h2>Most Voted Anecdote</h2>
          <p>{mostVotedAnecdote}</p>
        </>
      )}
    </>
  )
}

export default App