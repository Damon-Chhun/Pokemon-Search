export const GET_OFFSET = "GET_OFFSET";
export const GET_POKEMONS = "GET_POKEMONS";
export const GET_WEIGHT = "GET_WEIGHT";

export function nextPage(data) {
  return {
    type: GET_OFFSET,
    data
  };
}

export function prevPage(data) {
  return {
    type: GET_OFFSET,
    data
  };
}

export function fetchPokemons(offset) {
  return async function(dispatch) {
    try {
      const API_URL = "https://pokeapi.co/api/v2/pokemon/?offset=";
      const LIMIT_URL = "&limit=20";
      const response = await fetch(`${API_URL}${offset}${LIMIT_URL}`);
      const { results = [] } = await response.json();
      return dispatch({
        type: "GET_POKEMONS",
        data: results
      });
    } catch (e) {
      console.log(e);
    }
  };
}

export function fetchPokemonInfo(URL) {
  return async function(dispatch) {
    try {
      const results = await fetch(`${URL}`);
      const pokemonInfo = await results.json();
      const weight = pokemonInfo.weight;
      return dispatch({
        type: GET_WEIGHT,
        data: weight
      });
    } catch (e) {
      console.log(e);
    }
  };
}
