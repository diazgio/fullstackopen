import React from 'react';

const Total = ({ numbers }) => {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);

    return (
        <>
            <h2>Total</h2>
            <p>Number of exercises: {sum}</p>
        </>
    );
};

export default Total;
