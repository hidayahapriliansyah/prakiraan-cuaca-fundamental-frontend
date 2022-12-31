const loadingElement = document.createElement('div');
loadingElement.classList.add('loading');
const loadingAnimationElement = document.createElement('img');
loadingAnimationElement.setAttribute('src', require('../../../assets/img/gif/loading.gif'));

loadingElement.append(loadingAnimationElement);

export default loadingElement;
