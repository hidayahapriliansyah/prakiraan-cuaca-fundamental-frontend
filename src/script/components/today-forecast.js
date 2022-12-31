import './live-weather';
import './today-weather';

class TodayForecast extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const liveWeatherElement = document.createElement('live-weather');
    const todayWeatherElement = document.createElement('today-weather');

    this.appendChild(liveWeatherElement);
    this.appendChild(todayWeatherElement);
  }
}

customElements.define('today-forecast', TodayForecast);
