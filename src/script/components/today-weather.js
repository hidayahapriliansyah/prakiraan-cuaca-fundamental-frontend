class TodayWeather extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="sunrise-set">
      <div class="sunrise-set-card">
        <div class="sunrise-icon"></div>
        <div class="sunrise-desc">Terbit</div>
        <div class="sunrise-time"></div>
      </div>
      <div class="sunrise-set-card">
        <div class="sunset-icon"></div>
        <div class="sunset-desc">Terbenam</div>
        <div class="sunset-time"></div>
      </div>
    </div>
    `;
  }
}

customElements.define('today-weather', TodayWeather);
