const COUNTRIES = 'https://restcountries.eu/rest/v2';

function fetchCountries(searchQuery) {
  return fetch(`${COUNTRIES}/name/${searchQuery}`).then(response => response.json());
}

export default { fetchCountries };
