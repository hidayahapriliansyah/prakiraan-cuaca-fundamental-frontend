const hamburgerElement = document.querySelector('.hamburger');
hamburgerElement.addEventListener('click', () => {
  hamburgerElement.classList.toggle('x');
  const nav = document.querySelector('.nav');
  nav.classList.toggle('active');
});

const btnDetailElement = document.querySelector('.btn-detail');
btnDetailElement.addEventListener('click', () => {
  const detailInfoElement = document.querySelector('.detail-info');
  detailInfoElement.classList.toggle('active');
});

const changeLocationMenuElement = document.querySelector('.change-location');
changeLocationMenuElement.addEventListener('click', () => {
  changeLocationMenuElement.classList.toggle('active');
  const changeLocationForm = document.querySelector('.form-change-loc');
  changeLocationForm.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('btn-home-error')) {
    hamburgerElement.classList.toggle('x');
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
  }
});
