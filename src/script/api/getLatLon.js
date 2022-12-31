import getIpInfo from './getIpInfo';
import renderQuery from '../helper/renderQuery';
import searchCountry from './searchCountry';
import getCountryCode from './getCountryCode';

const getLatLon = async () => {
  try {
    const { search: query } = window.location;

    if (query) {
      let q = '';
      const { city, country } = renderQuery(query);

      if (city) {
        q += city;
        if (country) {
          const countryCode = await getCountryCode(country);
          q += `,${countryCode}`;
        }

        const data = await searchCountry(q);

        if (data instanceof Error) {
          throw data;
        }

        const { lat, lon } = data.coord;
        const countryCode = data.sys.country;
        const cityName = data.name;

        return {
          lat, lon, countryCode, cityName,
        };
      }
    }

    const ipInfo = await getIpInfo();

    if (ipInfo instanceof Error) {
      throw ipInfo;
    }

    const lat = ipInfo.loc.split(',')[0];
    const lon = ipInfo.loc.split(',')[1];
    const { city: cityName } = ipInfo;
    const countryCode = ipInfo.country;

    return {
      lat, lon, countryCode, cityName,
    };
  } catch (error) {
    return error;
  }
};

export default getLatLon;
