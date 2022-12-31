const axios = require('axios');

const getCountryCode = async (country) => {
  try {
    const response = await axios.get(`https://restcountries.com/v3.1/name/${country}?fullText=true`);
    const { data } = response;

    const countryCode = data[0].cca2;
    return countryCode;
  } catch (error) {
    if (error.name === 'NetworkError') {
      return error;
    }

    const throwError = new Error();
    if (!error.response) {
      throwError.name = 'NetworkError';
      throwError.message = 'Check if your connection is online, or you request into invalid server address';
    } else {
      const { response } = error;
      const { status } = response;
      const { message } = response.data;

      throwError.name = 'InputError';
      throwError.message = `${status} | ${message}. Country with name ${country} not found`;
      throwError.cause = 'Input country name is invalid';
    }

    return throwError;
  }
};

export default getCountryCode;
