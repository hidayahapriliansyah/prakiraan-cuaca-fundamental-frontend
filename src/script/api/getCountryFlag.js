const axios = require('axios');

const getCountryFlag = async (id) => {
  try {
    const response = await axios.get(`https://restcountries.com/v3.1/alpha/${id}`);
    const { data } = response;

    const flag = data[0].flags.png;
    return flag;
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

    const { response } = error;
    const { status } = response;
    const { message } = response.data;

    throwError.name = 'InputError';
    throwError.message = `${status} | ${message}. Country with code ${id} is not found`;
    throwError.cause = 'Input country code is invalid';
    return throwError;
  }
};

export default getCountryFlag;
