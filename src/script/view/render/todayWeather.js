import getTranslate from '../../library/dictionary/app';
import sentenceCase from '../../helper/textTransform/sentenceCase';

import images from '../../helper/importAllImages';

const renderTodayWeather = ({ countryCode, twilight, listFiveDays }) => {
  const sunriseTitleElement = document.querySelector('.sunrise-desc');
  let sunriseTitle = getTranslate(countryCode, 'sunrise');
  sunriseTitle = sentenceCase(sunriseTitle);
  sunriseTitleElement.innerText = sunriseTitle;

  const sunsetTitleElement = document.querySelector('.sunset-desc');
  let sunsetTitle = getTranslate(countryCode, 'sunset');
  sunsetTitle = sentenceCase(sunsetTitle);
  sunsetTitleElement.innerText = sunsetTitle;

  const sunriseTimeElement = document.querySelector('.sunrise-time');
  const sunsetTimeElement = document.querySelector('.sunset-time');
  let { sunrise, sunset } = twilight;
  let sunriseHour = new Date(sunrise * 1000).getHours().toString();
  let sunriseMinute = new Date(sunrise * 1000).getMinutes().toString();

  if (sunriseHour.length === 1) {
    sunriseHour = `0${sunriseHour}`;
  }

  if (sunriseMinute.length === 1) {
    sunriseMinute = `0${sunriseMinute}`;
  }

  sunrise = `${sunriseHour}:${sunriseMinute}`;

  let sunsetHour = new Date(sunset * 1000).getHours().toString();
  let sunsetMinute = new Date(sunset * 1000).getMinutes().toString();

  if (sunsetHour.length === 1) {
    sunsetHour = `0${sunsetHour}`;
  }
  if (sunsetMinute.length === 1) {
    sunsetMinute = `0${sunsetMinute}`;
  }

  sunset = `${sunsetHour}:${sunsetMinute}`;

  sunriseTimeElement.innerText = sunrise;
  sunsetTimeElement.innerText = sunset;

  const dateNow = new Date().getDate();
  const weatherToday = listFiveDays.filter((data) => {
    const dataDate = new Date(data.dt * 1000).getDate();
    return dateNow === dataDate;
  });

  weatherToday.forEach((data) => {
    let timeHour = new Date(data.dt * 1000).getHours().toString();

    if (timeHour.length === 1) {
      timeHour = `0${timeHour}`;
    }

    let timeMinute = new Date(data.dt * 1000).getMinutes().toString();
    if (timeMinute.length === 1) {
      timeMinute = `0${timeMinute}`;
    }

    const time = `${timeHour}:${timeMinute}`;
    let { description } = data.weather[0];
    description = sentenceCase(description);

    const { icon } = data.weather[0];

    const todayWeatherElement = document.querySelector('today-weather');

    const cardWithDetailElement = document.createElement('div');
    cardWithDetailElement.classList.add('card-with-detail');

    const weatherTimeShortElement = document.createElement('div');
    weatherTimeShortElement.classList.add('weather-time-short');

    const weatherShortElement = document.createElement('div');
    weatherShortElement.classList.add('weather-short');

    const wtIconElement = document.createElement('div');
    wtIconElement.classList.add('wt-icon');

    const wtImgElement = document.createElement('img');
    wtImgElement.setAttribute('alt', 'weather-icon');
    wtImgElement.setAttribute('src', images[`${icon}.png`]);
    wtIconElement.appendChild(wtImgElement);

    const wtDescElement = document.createElement('div');
    wtDescElement.classList.add('wt-desc');
    wtDescElement.innerText = description;

    weatherShortElement.appendChild(wtIconElement);
    weatherShortElement.appendChild(wtDescElement);
    weatherTimeShortElement.appendChild(weatherShortElement);

    const timeShortElement = document.createElement('div');
    timeShortElement.classList.add('time-short');
    timeShortElement.innerText = time;

    cardWithDetailElement.appendChild(weatherTimeShortElement);
    cardWithDetailElement.appendChild(timeShortElement);

    todayWeatherElement.appendChild(cardWithDetailElement);
  });
};

export default renderTodayWeather;
