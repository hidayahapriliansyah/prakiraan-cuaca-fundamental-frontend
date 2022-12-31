const errorInterface = (error) => {
  const mainElement = document.querySelector('main');
  const todayForecastElement = document.querySelector('today-forecast');
  const forecastNextDaysElement = document.querySelector('forecast-nextdays');

  todayForecastElement.remove();
  forecastNextDaysElement.remove();

  const errorDivElement = document.createElement('div');
  errorDivElement.classList.add('error-message');
  const pMessageElement = document.createElement('p');
  pMessageElement.innerText = error.message;
  errorDivElement.appendChild(pMessageElement);

  const homeButtonElement = document.createElement('button');
  homeButtonElement.classList.add('btn-home-error');
  homeButtonElement.innerText = 'Go to Menu';

  errorDivElement.appendChild(homeButtonElement);
  mainElement.append(errorDivElement);
};

export default errorInterface;
