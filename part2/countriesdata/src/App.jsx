import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from './components/Filter';
import Country from './components/Country';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filterName, setFilterName] = useState('');
  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  console.log(countries);

  const handleFilterChange = (event) => {
    setFilterName(event.target.value.toLowerCase());
  }

  let filteredCountries = [];
  if (filterName !== '') {
    filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(filterName));
  }

  return (
    <>
      <h1>Countries Data</h1>
      <Filter filteredCountry={filterName} handleFilterChange={handleFilterChange} />
      {filteredCountries.length > 0 ? (
        filteredCountries.map(country => (
          <Country key={country.name.common} name={country.name.common} population={country.population} languages={country.languages} flag={country.flag} />
        ))
      ) : (
        <p>Write and find your country</p>
      )}
    </>
  )
}

export default App;
