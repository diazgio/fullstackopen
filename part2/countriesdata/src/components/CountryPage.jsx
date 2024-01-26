import React from 'react';
import '../assets/styles/components/Country.css'

const CountryPage = ({ name, population, languages, flag }) => {
  return (
    <div className='container-country-info'>
      {<h2><strong>{name}</strong></h2>}
      {population && <p>Population: {population}</p>}
      {languages && (
        <ul>
          <h2><strong>Languages</strong></h2>
          {Object.values(languages).map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
      )}
      {flag && <p>{flag}</p>}
    </div>
  );
};

export default CountryPage;
