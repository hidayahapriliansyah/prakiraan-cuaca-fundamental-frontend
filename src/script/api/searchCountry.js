import { openWeatherMapKey } from './keys/apiKeys';

const axios = require('axios');

const searchCountry = async (params) => {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${params}&appid=${openWeatherMapKey}`);
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

    if (cod === '404') {
      throwError.name = 'LocationError';
      throwError.message = `${cod} | City ${params} not found. Please input valid location`;
      throwError.cause = `${message} parameter`;
    }

    if (cod === '400') {
      throwError.name = 'UrlError';
      throwError.message = `${cod} | Please check your URL and input valid URL addreess`;
      throwError.cause = message;
    }
    return throwError;
  }
};

export default searchCountry;
