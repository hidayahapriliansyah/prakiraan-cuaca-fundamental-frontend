class LiveWeather extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="home-content">
        <div class="now-title"></div>
        <span class="date"></span>
        <span class="time"></span>
        <h1 class="city-name"></h1>
        <div class="country-id">
          <span class="country-code"></span>
          <img class="country-flag" alt="country-flag" width="30">
        </div>
        <p class="description"></p>
        <div class="image">
          <img class="icon-image" alt="cuaca" />
        </div>
        <div class="extended-info">
          <div class="wind-speed">
            <div alt="wind" class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) -->
                <path
                  d="M156.7 256H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h142.2c15.9 0 30.8 10.9 33.4 26.6 3.3 20-12.1 37.4-31.6 37.4-14.1 0-26.1-9.2-30.4-21.9-2.1-6.3-8.6-10.1-15.2-10.1H81.6c-9.8 0-17.7 8.8-15.9 18.4 8.6 44.1 47.6 77.6 94.2 77.6 57.1 0 102.7-50.1 95.2-108.6C249 291 205.4 256 156.7 256zM16 224h336c59.7 0 106.8-54.8 93.8-116.7-7.6-36.2-36.9-65.5-73.1-73.1-55.4-11.6-105.1 24.9-114.9 75.5-1.9 9.6 6.1 18.3 15.8 18.3h32.8c6.7 0 13.1-3.8 15.2-10.1C325.9 105.2 337.9 96 352 96c19.4 0 34.9 17.4 31.6 37.4-2.6 15.7-17.4 26.6-33.4 26.6H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16zm384 32H243.7c19.3 16.6 33.2 38.8 39.8 64H400c26.5 0 48 21.5 48 48s-21.5 48-48 48c-17.9 0-33.3-9.9-41.6-24.4-2.9-5-8.7-7.6-14.5-7.6h-33.8c-10.9 0-19 10.8-15.3 21.1 17.8 50.6 70.5 84.8 129.4 72.3 41.2-8.7 75.1-41.6 84.7-82.7C526 321.5 470.5 256 400 256z"
                />
              </svg>
            </div>
          </div>
          <div class="temp"></div>
          <div class="temp-max-min">
            <div alt="temp-min-max" class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) -->
                <path
                  d="M416 0c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm0 128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm-160-16C256 50.1 205.9 0 144 0S32 50.1 32 112v166.5C12.3 303.2 0 334 0 368c0 79.5 64.5 144 144 144s144-64.5 144-144c0-34-12.3-64.9-32-89.5V112zM144 448c-44.1 0-80-35.9-80-80 0-25.5 12.2-48.9 32-63.8V112c0-26.5 21.5-48 48-48s48 21.5 48 48v192.2c19.8 14.8 32 38.3 32 63.8 0 44.1-35.9 80-80 80zm16-125.1V112c0-8.8-7.2-16-16-16s-16 7.2-16 16v210.9c-18.6 6.6-32 24.2-32 45.1 0 26.5 21.5 48 48 48s48-21.5 48-48c0-20.9-13.4-38.5-32-45.1z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="detail-info-el">
        <button type="button" class="btn-detail">
          Detail
        </button>
        <div class="detail-info">
          <table>
            <tbody>
              <tr>
                <td class="humidity-title"></td>
                <td class="humidity">%</td>
              </tr>
              <tr>
                <td class="temperature-title"></td>
                <td class="temperature"></td>
              </tr>
              <tr>
                <td class="temp-max-title"></td>
                <td class="temp-max"></td>
              </tr>
              <tr>
                <td class="temp-min-title"></td>
                <td class="temp-min"></td>
              </tr>
              <tr>
                <td class="feels-like-title"></td>
                <td class="feels-like"></td>
              </tr>
              <tr>
                <td class="speed-title"></td>
                <td class="speed"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `;
  }
}

customElements.define('live-weather', LiveWeather);
