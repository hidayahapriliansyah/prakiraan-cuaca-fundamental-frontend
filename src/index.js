import './script/components/forecast-nextdays';
import './script/components/today-forecast';

import './style/liveWeather.css';
import './style/forecastNextDays.css';
import './style/todayWeather.css';
import './style/main.css';

import './script/event/events';
import renderUI from './script/view/main';
import loadingElement from './script/view/render/loader';

document.addEventListener('DOMContentLoaded', () => {
  document.body.append(loadingElement);
  window.addEventListener('load', () => {
    setTimeout(() => {
      loadingElement.remove();
    }, 500);
    renderUI();
  });
});
