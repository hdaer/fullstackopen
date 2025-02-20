/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import countriesService from "../services/countries";

const CountryStats = ({ country }) => {
  const [weatherStats, setWeatherStats] = useState(null);

  useEffect(() => {
    const weather = countriesService.getWeather(
      country.capital[0],
      country.altSpellings[0].toLowerCase()
    );
    weather.then((initialStats) => setWeatherStats(initialStats));
  }, [country.altSpellings, country.capital]);

  console.log(weatherStats);

  return (
    <>
      <h1 className="country-name">{country.name.common}</h1>

      <p>Capital {country.capital}</p>
      <p>Area {country.area}</p>

      <h2>Languages</h2>
      <ul className="language-list">
        {Object.values(country.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>

      <img className="country-flag" src={country.flags.png} />
      {weatherStats && (
        <>
          <h2>{`Weather currently in ${country.capital[0]}`}</h2>
          <p>{`Temperature ${weatherStats.main.temp} Celsius`}</p>
          <img
            src={`https://openweathermap.org/img/wn/${weatherStats.weather[0].icon}@2x.png`}
            alt="weather icon"
          />
          <p>{`Wind ${weatherStats.wind.speed} m/s`}</p>
        </>
      )}
    </>
  );
};

export default CountryStats;
