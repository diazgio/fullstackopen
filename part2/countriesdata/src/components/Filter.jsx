import React from 'react';

const Filter = ({filteredCountry, handleFilterChange}) => {
  return (
    <div>
      find country: <input value={filteredCountry} onChange={handleFilterChange} placeholder='Enter country name' />
    </div>
  );
};

export default Filter;
