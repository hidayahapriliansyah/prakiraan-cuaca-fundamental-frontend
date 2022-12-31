import { openWeatherMapKey } from './keys/apiKeys';

const axios = require('axios');

const getWeatherInfo = async ({ lat, lon, countryCode }) => {
  try {
    let qLang = '';
    if (countryCode.toLowerCase() === 'id') {
      qLang = `&lang=${countryCode}`;
    }

    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}${qLang}&appid=${openWeatherMapKey}&units=metric`,
    );

    const { data } = response;
    return data;
  } catch (error) {
    if (error.name === 'NetworkError') {
      return error;
    }

    const throwError = new Error();

    if (!error.response) {
      throwError.name = 'NetworkError';
      throwError.message = 'Check if your connection is online, or you request into invalid server address';
      return throwError;
    }

    const { cod, message } = error.response.data;
    if (cod === 401) {
      throwError.name = 'KeyError';
      throwError.message = message;
      throwError.cause = 'Invalid API Key';
    }

    if (cod === '400') {
      throwError.name = 'LocationError';
      throwError.message = `${message}. please input valid location`;
      throwError.cause = `${message} parameter`;
    }

    if (cod === '404') {
      throwError.name = 'UrlError';
      throwError.message = `${cod} | Please check and input valid URL addreess`;
      throwError.cause = message;
    }
    return throwError;
  }
};

export default getWeatherInfo;
