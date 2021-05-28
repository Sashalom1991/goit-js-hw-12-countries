import './sass/main.scss';
import pokemonCardTpl from './templates/pockemon-card.hbs';
import API from './js/api-service';

const refs = {
  cardContainer: document.querySelector('.js-card-container'),
  searchForm: document.querySelector('.js-search-form'),
};

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const searchQuery = form.elements.query.value;

  API(searchQuery)
    .then(renderPokemonCard)
    .catch(onFetchError)
    .finally(() => form.reset());
}

function renderPokemonCard(pokemon) {
  const markup = pokemonCardTpl(pokemon);
  console.log(markup);
  refs.cardContainer.innerHTML = markup;
}

function onFetchError(error) {
  alert('Упс');
}
