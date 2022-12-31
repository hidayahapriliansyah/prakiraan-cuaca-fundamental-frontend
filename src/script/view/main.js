import getWeatherInfo from '../api/getWeatherInfo';
import getFiveDaysForecastData from '../api/getFiveDaysForecastData';
import getLatLon from '../api/getLatLon';
import monthsList from '../library/clock/monthsList';
import clock from '../library/clock/clock';

import renderLiveWeather from './render/liveWeather';
import renderTodayWeather from './render/todayWeather';
import renderForecastNextDays from './render/forecastNextDays';
import renderNavbar from './render/navbar';
import errorInterface from './render/errorInterface';

const renderUI = async () => {
  try {
    const latlon = await getLatLon();
    if (latlon instanceof Error) {
      throw latlon;
    }
    const {
      lat, lon, countryCode, cityName,
    } = latlon;

    const weatherinfo = await getWeatherInfo({ lat, lon, countryCode });
    if (weatherinfo instanceof Error) {
      throw weatherinfo;
    }
    const { description, icon } = weatherinfo.weather[0];
    const {
      humidity,
      temp,
      temp_max: tempMax,
      temp_min: tempMin,
      feels_like: feelsLike,
    } = weatherinfo.main;
    const { speed } = weatherinfo.wind;

    const fiveDaysData = await getFiveDaysForecastData({ lat, lon, countryCode });
    if (fiveDaysData instanceof Error) {
      throw fiveDaysData;
    }

    /** render navbar */
    renderNavbar(countryCode);

    // clock
    clock(countryCode);

    /** live weather element */
    renderLiveWeather({
      countryCode,
      description,
      cityName,
      icon,
      speed,
      temp,
      tempMin,
      tempMax,
      humidity,
      feelsLike,
    });

    /** today weather */
    const listFiveDays = fiveDaysData.list;
    const twilight = weatherinfo.sys;
    renderTodayWeather({ countryCode, twilight, listFiveDays });

    // forecast nextdays
    renderForecastNextDays({ countryCode, listFiveDays, monthsList });
  } catch (error) {
    renderNavbar();
    errorInterface(error);
  }
};

export default renderUI;
