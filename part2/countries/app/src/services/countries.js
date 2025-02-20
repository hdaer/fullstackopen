import axios from 'axios';
const api_key = import.meta.env.VITE_SOME_KEY;


const baseCountriesURL = 'https://studies.cs.helsinki.fi/restcountries/api/'

const baseWeatherURL = 'api.openweathermap.org/data/2.5/weather?'



const getCountries = async () => {
    const request = axios.get(baseCountriesURL + 'all');
    return request.then(response => response.data)
}

const getWeather = async (capitalName, countryName) => {
    try {
        const request = await axios.get(`https://${baseWeatherURL}q=${capitalName},${countryName}&appid=${api_key}&units=metric`);
        return request.data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
}

export default { getCountries, getWeather };