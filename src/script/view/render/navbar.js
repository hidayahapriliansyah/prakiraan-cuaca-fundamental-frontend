import getTranslate from '../../library/dictionary/app';
import sentenceCase from '../../helper/textTransform/sentenceCase';
import firstCase from '../../helper/textTransform/firstCase';

const renderNavbar = (countryCode = 'en') => {
  const changeLocMenuElement = document.querySelector('.btn-menu.change-location');
  let changeLocMenuTitle = getTranslate(countryCode, 'location');
  changeLocMenuTitle = sentenceCase(changeLocMenuTitle);
  changeLocMenuElement.innerText = changeLocMenuTitle;

  const ctaChangeLocElement = document.querySelector('.cta-change-loc');
  let ctaChangeLocTitle = getTranslate(countryCode, 'ctaLocation');
  ctaChangeLocTitle = firstCase(ctaChangeLocTitle);
  ctaChangeLocElement.innerText = ctaChangeLocTitle;

  const cityTitleElement = document.querySelector('.city-title');
  let cityTitle = getTranslate(countryCode, 'city');
  cityTitle = firstCase(cityTitle);
  cityTitleElement.innerText = cityTitle;

  const countryTitleElement = document.querySelector('.country-title');
  let countryTitle = getTranslate(countryCode, 'country');
  countryTitle = firstCase(countryTitle);
  countryTitleElement.innerText = countryTitle;

  const citySearchElement = document.querySelector('.city-search');
  let citySearchPlaceholder = getTranslate(countryCode, 'citySearch');
  citySearchPlaceholder = firstCase(citySearchPlaceholder);
  citySearchElement.setAttribute('placeholder', citySearchPlaceholder);

  const countrySearchElement = document.querySelector('.country-search');
  let countrySearchPlaceholder = getTranslate(countryCode, 'countrySearch');
  countrySearchPlaceholder = firstCase(countrySearchPlaceholder);
  countrySearchElement.setAttribute('placeholder', countrySearchPlaceholder);

  const searchSubmitBtn = document.querySelector('.submit-search-btn');
  let searchBtnTitle = getTranslate(countryCode, 'submitSearchBtn');
  searchBtnTitle = firstCase(searchBtnTitle);
  searchSubmitBtn.innerText = searchBtnTitle;
};

export default renderNavbar;
