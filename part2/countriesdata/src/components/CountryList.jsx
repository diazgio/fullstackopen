import React, { useState } from 'react';
import '../assets/styles/components/CountryList.css'

const CountryList = ({ name, population, languages, flag }) => {
  const [showInfo, setShowInfo] = useState(false);

  const handleClickShow = (e) => {
    e.preventDefault();
    setShowInfo(!showInfo);
  }

  return (
    <>
      <div className="container-countries-list">
        <h2><strong>{name}</strong></h2>
        <button onClick={handleClickShow}>Show</button>
      </div>
      {showInfo && (
        <div className='container-country-info'>
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
      )}
    </>
  );
};

export default CountryList;
