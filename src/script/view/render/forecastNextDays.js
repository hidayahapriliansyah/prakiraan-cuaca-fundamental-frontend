import getTranslate from '../../library/dictionary/app';
import firstCase from '../../helper/textTransform/firstCase';
import sentenceCase from '../../helper/textTransform/sentenceCase';

import images from '../../helper/importAllImages';

const renderForecastNextDays = ({ countryCode, listFiveDays, monthsList }) => {
  const forecastNextDaysTitleElement = document.querySelector('.title-forecastnext');
  let forecastNextDaysTitle = getTranslate(countryCode, 'nextday');
  forecastNextDaysTitle = sentenceCase(forecastNextDaysTitle);
  forecastNextDaysTitleElement.innerText = forecastNextDaysTitle;

  const timeUnixUTCFirst = listFiveDays[0].dt;

  const day2 = listFiveDays.filter((data) => data.dt === timeUnixUTCFirst + 86400);
  const day3 = listFiveDays.filter((data) => data.dt === timeUnixUTCFirst + 86400 * 2);
  const day4 = listFiveDays.filter((data) => data.dt === timeUnixUTCFirst + 86400 * 3);
  const day5 = listFiveDays.filter((data) => data.dt === timeUnixUTCFirst + 86400 * 4);

  const nextDays = [...day2, ...day3, ...day4, ...day5];

  const cardGroupElement = document.querySelector('.card-group');
  nextDays.forEach((day, i) => {
    const date = new Date(day.dt * 1000).getDate();
    let month = monthsList[new Date(day.dt * 1000).getMonth()].toLowerCase();
    month = getTranslate(countryCode, month);
    month = firstCase(month);
    month = month.slice(0, 3);

    let desc = day.weather[0].description;
    const { icon } = day.weather[0];
    const temperature = day.main.temp;

    desc = sentenceCase(desc);

    const cardDivElement = document.createElement('div');
    cardDivElement.classList.add('card');

    const smallTimeElement = document.createElement('small');
    smallTimeElement.innerText = i === 0
      ? firstCase(getTranslate(countryCode, 'tomorrow'))
      : `${date}-${month}`;

    const spanDescElement = document.createElement('span');
    spanDescElement.innerText = `${desc}`;

    const imgIconElement = document.createElement('img');
    imgIconElement.classList.add('next-icon');
    imgIconElement.setAttribute('src', images[`${icon}.png`]);

    const spanTemElement = document.createElement('span');
    spanTemElement.classList.add('next-temp');
    spanTemElement.innerText = `${temperature}°C`;

    cardDivElement.appendChild(smallTimeElement);
    cardDivElement.appendChild(spanDescElement);
    cardDivElement.appendChild(imgIconElement);
    cardDivElement.appendChild(spanTemElement);

    cardGroupElement.appendChild(cardDivElement);
  });
};

export default renderForecastNextDays;
