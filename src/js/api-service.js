function fetchPokemon(pokemonId) {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
  fetch(url).then(response => response.json());
  // .then(renderPokemonCard)
  // .catch(onFetchError)
  // .finally(() => form.reset());
}

export default { fetchPokemon };
