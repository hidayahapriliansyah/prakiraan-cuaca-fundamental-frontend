import getCountryFlag from '../../api/getCountryFlag';
import firstCase from '../../helper/textTransform/firstCase';
import sentenceCase from '../../helper/textTransform/sentenceCase';
import getTranslate from '../../library/dictionary/app';

import images from '../../helper/importAllImages';

const renderLiveWeather = async ({
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
}) => {
  const newTemp = temp.toString().split('.')[0];

  const nowTitleElement = document.querySelector('.now-title');
  let nowTitle = getTranslate(countryCode, 'now');
  nowTitle = firstCase(nowTitle);
  nowTitleElement.innerText = nowTitle;

  const descriptionElement = document.querySelector('.description');
  const sentenceCaseDesc = sentenceCase(description);
  descriptionElement.append(sentenceCaseDesc);

  const cityNameElementh1 = document.querySelector('.city-name');
  cityNameElementh1.append(cityName);

  const countryCodeElement = document.querySelector('.country-code');
  countryCodeElement.innerText = countryCode;

  const countryFlag = await getCountryFlag(countryCode);
  const countryFlagImgElement = document.querySelector('.country-flag');
  countryFlagImgElement.setAttribute('src', countryFlag);

  const iconImgElement = document.querySelector('.icon-image');
  iconImgElement.setAttribute('src', images[`${icon}.png`]);

  const unit = getTranslate(countryCode, 'unitSpeed');
  const windSpeedElement = document.querySelector('.wind-speed');
  windSpeedElement.append(`${speed} ${unit}`);

  const tempHeadingElement = document.querySelector('.temp');
  tempHeadingElement.append(`${newTemp}°C`);

  const tempMaxMinElement = document.querySelector('.temp-max-min');
  const divTempMaxMinDescElement = document.createElement('div');
  divTempMaxMinDescElement.innerHTML = `<p>${tempMin}-</p>${tempMax}°C`;
  tempMaxMinElement.appendChild(divTempMaxMinDescElement);

  const humidityTitleElement = document.querySelector('.humidity-title');
  let humidityTitle = getTranslate(countryCode, 'humidity');
  humidityTitle = firstCase(humidityTitle);
  humidityTitleElement.innerText = humidityTitle;

  const humidityElement = document.querySelector('.humidity');
  humidityElement.innerText = `${humidity}%`;

  const tempTitleElement = document.querySelector('.temperature-title');
  let tempTitle = getTranslate(countryCode, 'temperature');
  tempTitle = firstCase(tempTitle);
  tempTitleElement.innerText = tempTitle;

  const tempElement = document.querySelector('.temperature');
  tempElement.innerText = `${temp}°C`;

  const tempMaxTitleElement = document.querySelector('.temp-max-title');
  let tempMaxTitle = getTranslate(countryCode, 'tempMax');
  tempMaxTitle = firstCase(tempMaxTitle);
  tempMaxTitleElement.innerText = tempMaxTitle;

  const tempMaxElement = document.querySelector('.temp-max');
  tempMaxElement.innerText = `${tempMax}°C`;

  const tempMinTitleElement = document.querySelector('.temp-min-title');
  let tempMinTitle = getTranslate(countryCode, 'tempMin');
  tempMinTitle = firstCase(tempMinTitle);
  tempMinTitleElement.innerText = tempMinTitle;

  const tempMinElement = document.querySelector('.temp-min');
  tempMinElement.innerText = `${tempMin}°C`;

  const feelsLikeTitleElement = document.querySelector('.feels-like-title');
  let feelsLikeTitle = getTranslate(countryCode, 'feelsLike');
  feelsLikeTitle = firstCase(feelsLikeTitle);
  feelsLikeTitleElement.innerText = feelsLikeTitle;

  const feelsLikeElement = document.querySelector('.feels-like');
  feelsLikeElement.innerText = `${feelsLike}°C`;

  const speedTitleElement = document.querySelector('.speed-title');
  let speedTitle = getTranslate(countryCode, 'windSpeed');
  speedTitle = firstCase(speedTitle);
  speedTitleElement.innerText = speedTitle;

  const speedElement = document.querySelector('.speed');
  speedElement.innerText = `${speed} ${unit}`;
};

export default renderLiveWeather;
