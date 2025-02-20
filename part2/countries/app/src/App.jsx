{
  /*export VITE_SOME_KEY=yourKey && npm run dev // For Linux/macOS Bash
($env:VITE_SOME_KEY="yourKey") -and (npm run dev) // For Windows PowerShell
set "VITE_SOME_KEY=yourKey" && npm run dev // For Windows cmd.exe*/
}

import "./app.css";

import { useState, useEffect } from "react";
import countriesService from "./services/countries";

import CountryStats from "./components/CountryStats";

const App = () => {
  const [value, setValue] = useState("");
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    const countries = countriesService.getCountries();
    countries.then((initialCountries) => setCountries(initialCountries));
  }, []);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleCountryClick = (countryName) => {
    setValue(countryName.toLowerCase());
  };

  const countriesToDisplay =
    value && countries
      ? countries.filter((country) =>
          country.name.common.toLowerCase().includes(value.toLowerCase())
        )
      : [];

  return (
    <div className="country-app">
      <h1>Country Finder</h1>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Enter country name"
      />
      {countriesToDisplay.length <= 10 && countriesToDisplay.length > 1 && (
        <ul>
          {countriesToDisplay.map((country) => (
            <li key={country.name.common}>
              {country.name.common}
              <button onClick={() => handleCountryClick(country.name.common)}>
                show stats
              </button>
            </li>
          ))}
        </ul>
      )}

      {countriesToDisplay.length === 1 &&
        countriesToDisplay.map((country) => (
          <CountryStats country={country} key={country.name.common} />
        ))}
    </div>
  );
};

export default App;
