import React from 'react';

const Total = (props) => {
    const [ ...parts ]   = props.numbers;
    const sum = parts.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.exercises;
    }, 0);
    return (
        <>
          <h2>Total</h2>
          <p>Number of exercises: {sum}</p>
        </>
    );
};

export default Total;
