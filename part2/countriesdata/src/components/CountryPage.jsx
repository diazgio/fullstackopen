import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/styles/components/Country.css'

const CountryPage = ({ name, population, languages, flag, capital }) => {
  const [weatherData, setWeatherData] = useState(null); // Add weatherData state
  const API_WEATHER_KEY = import.meta.env.VITE_API_WEATHER_KEY;

  useEffect(() => {
    if (capital !== '') {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${API_WEATHER_KEY}&units=metric`)
        .then(response => {
          setWeatherData(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [capital]);

  console.log(weatherData.weather[0].icon);

  return (
    <div className='container-country-info'>
      <h2><strong>{name}</strong></h2>
      {population && <p>Population: {population}</p>}
      {capital && <p>Capital: {capital}</p>}
      {languages && (
        <ul>
          <h2><strong>Languages</strong></h2>
          {Object.values(languages).map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
      )}
      {flag && <p>{flag}</p>}
      <h2><strong>Weather in {capital}</strong></h2>
      <p>Temperature: {weatherData.main.temp} celcius</p>
      <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} alt="" />
      <p>Wind: {weatherData.wind.speed} m/s</p>
    </div>
  );
};

export default CountryPage;
