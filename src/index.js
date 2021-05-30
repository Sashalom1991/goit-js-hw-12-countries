import './sass/main.scss';
import cardOneCountry from './templates/card-of-one-country.hbs';
import cardListCountries from './templates/list-countries.hbs';
import API from './js/fetchCountries';
import debounce from 'lodash.debounce';

import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import { alert, error } from '@pnotify/core/dist/PNotify.js';

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

  if (countries.length > 1 && countries.length <= 10) {
    const markup = cardListCountries(countries);
    return (refs.cardContainer.innerHTML = markup);
  } else if (countries.length === 1) {
    const markup = cardOneCountry(countries[0]);
    return (refs.cardContainer.innerHTML = markup);
  } else if (countries.length > 10) {
    return error({
      title: 'Oh No!',
      text: 'Something terrible happened.',
    });
  } else if (countries.status === 404) {
    return error({
      title: 'Oh sorry, error 404!!!',
      text: 'Your query returned an incorrect result(((',
    });
  }

  function clearCardContainer() {
    refs.cardContainer.innerHTML = '';
  }
}

function onFetchError() {
  alert({
    text: 'Caution, not correct data !!!',
  });
}
