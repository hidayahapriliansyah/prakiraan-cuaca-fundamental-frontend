class ForecastNextdays extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <h2 class="title-forecastnext"></h2>
      <div class="card-group">
      </div>
    `;
  }
}

customElements.define('forecast-nextdays', ForecastNextdays);
