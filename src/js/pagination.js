// import './css/common.css';

const refs = {
  searchForm: document.querySelector('.js-search-form'),
  articlesContainer: document.querySelector('.js-articles-container'),
};

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();

  const options = {
    headers: {
      Authorization: '433c36a250ef4f4485e8e11f2c1edfe9',
    },
  };
}

const url = 'GET https://newsapi.org/v2/everything';

fetch(url, options)
  .then(r => r.json)
  .then(console.log);
