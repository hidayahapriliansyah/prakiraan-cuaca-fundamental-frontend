import daysList from './daysList';
import monthsList from './monthsList';
import getTranslate from '../dictionary/app';
import firstCase from '../../helper/textTransform/firstCase';

const clock = async (lang) => {
  const time = new Date();
  const hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();

  const timeElement = document.querySelector('.time');
  timeElement.innerHTML = `${hour}:${minute}:${second}`;

  let day = daysList[time.getDay()];
  const date = time.getDate();
  let month = monthsList[time.getMonth()];
  const year = time.getFullYear();

  day = getTranslate(lang, day.toLocaleLowerCase());
  month = getTranslate(lang, month.toLocaleLowerCase());

  day = firstCase(day);
  month = firstCase(month);

  const dateElement = document.querySelector('.date');
  dateElement.innerHTML = `${day}, ${date} ${month} ${year}`;

  setInterval(() => {
    const newTime = new Date();
    const newHour = newTime.getHours();
    const newMinute = newTime.getMinutes();
    const newSecond = newTime.getSeconds();
    timeElement.innerHTML = `${newHour}:${newMinute}:${newSecond}`;
  }, 1000);
};

export default clock;
