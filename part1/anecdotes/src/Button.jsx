import React, { useState } from 'react';

const Button = ({ handleClick }) => {

  return (
    <>
      <button onClick={handleClick}>Change Anecdote</button>
    </>
  );
};

export default Button;
