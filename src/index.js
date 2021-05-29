import './sass/main.scss';
import cardOneCountry from './templates/card-of-one-country.hbs';
import cardListCountries from './templates/list-countries.hbs';
import API from './js/fetchCountries';
import debounce from 'lodash.debounce';

import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import { error } from '@pnotify/core/dist/PNotify.js';

const refs = {
  cardContainer: document.querySelector('.js-card'),
  searchForm: document.querySelector('.js-search-form'),
};

refs.searchForm.addEventListener('input', debounce(inputEvent, 500));

function inputEvent(e) {
  const searchQuery = e.target.value;

  API.fetchCountries(searchQuery).then(renderCountryCard).catch(onFetchError);
}

function renderCountryCard(countries) {
  clearCardContainer();

  if (countries.length === 1) {
    const markup = cardOneCountry(countries[0]);
    refs.cardContainer.innerHTML = markup;
    // refs.cardContainer.insertAdjacentHTML('beforeend', markup);
  } else if (countries.length > 1 && countries.length <= 10) {
    const markup = cardListCountries(countries);
    // refs.cardContainer.insertAdjacentHTML('beforeend', markup);
    refs.cardContainer.innerHTML = markup;
  } else if (countries.length > 10) {
    error({
      title: 'Oh No!',
      text: 'Something terrible happened.',
    });
  }

  function clearCardContainer() {
    refs.cardContainer.innerHTML = '';
  }
}
