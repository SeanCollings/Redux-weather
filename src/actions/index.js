import axios from 'axios';

const API_KEY = 'f6d339faa488acb179c6746d935e3794';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${
  API_KEY
}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},za`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
