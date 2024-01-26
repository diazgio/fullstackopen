import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from './components/Filter';
import CountryPage from './components/CountryPage';
import CountryList from './components/CountryList';

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
      {filteredCountries.length === 0 ? (
        <p>Write and find your country</p>
      ) : filteredCountries.length === 1 ? (
        <CountryPage
          key={filteredCountries[0].name.common}
          name={filteredCountries[0].name.common}
          population={filteredCountries[0].population}
          languages={filteredCountries[0].languages}
          flag={filteredCountries[0].flag}
        />
      ) : (
        filteredCountries.map(country => (
          <CountryList
            key={country.name.common}
            name={country.name.common}
          />
        ))
      )}
    </>
  )
}

export default App;
