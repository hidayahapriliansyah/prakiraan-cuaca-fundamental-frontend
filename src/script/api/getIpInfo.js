import { ipInfoKey } from './keys/apiKeys';

const axios = require('axios');

const getIpInfo = async () => {
  try {
    const response = await axios.get(`https://ipinfo.io/?token=${ipInfoKey}`);
    const { data } = response;
    return data;
  } catch (error) {
    const throwError = new Error();

    if (!error.response) {
      throwError.name = 'NetworkError';
      throwError.message = 'Check if your connection is online, or you request into invalid server address';
    } else {
      const { data } = error.response;
      const { status } = data;
      const { title, message } = data.error;
      throwError.name = 'KeyError';
      throwError.message = `${status} | ${message}`;
      throwError.cause = title;
    }
    return throwError;
  }
};

export default getIpInfo;
