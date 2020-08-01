export const GET_OFFSET = "GET_OFFSET";
export const GET_POKEMONS = "GET_POKEMONS";
export const SET_POKEMONINFO = "SET_POKEMONINFO";

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

export const fetchPokemons = offset => async dispatch => {
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

export const setPokemonInfo = data => dispatch => {
  console.log(data);
  return dispatch({
    type: SET_POKEMONINFO,
    data: data
  });
};

export const fetchingData = () => {
  return {
    type: "fetchingData",
    data: true
  };
};

export const receivedData = () => {
  return {
    type: "ReceivedData",
    data: true
  };
};

export const gatherStats = (pokemonInfo, match) => dispatch => {
  console.log(pokemonInfo, match);
  const element = pokemonInfo[match - 1];
  const statsArray = element.stats;
  const base_stat = statsArray.map(object => {
    return object.base_stat;
  });
  console.log(base_stat);

  return dispatch({
    type: "GATHER_STATS",
    data: base_stat
  });
};
