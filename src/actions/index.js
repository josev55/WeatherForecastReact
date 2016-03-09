import axios from 'axios';

const API_KEY = '688b287eb3b835b386380416a323d2e9';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city ) {

  const url = `${ROOT_URL}&q=${city}`;
  const request = axios.get(url);
  
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
