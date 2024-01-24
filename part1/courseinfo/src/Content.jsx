import React from 'react';
import Part from './Part';

const Content = (props) => {
    const [ ...parts ]   = props.parts;

    return (
        <>
          {parts.map((part, index) => {
              return (
                  <Part
                    key={index}
                    name={part.name}
                    exercises={part.exercises}
                  />
              )
              }
            )
          }
        </>
    );
};

export default Content;
