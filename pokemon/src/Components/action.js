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
    console.log("POKEMONS FETCH IN ACTIONS", results);
    return dispatch({
      type: "GET_POKEMONS",
      data: results
    });
  } catch (e) {
    console.log(e, "FAILED TO FETCH POKEMONS IN ACTION");
  }
};

export const setPokemonInfo = data => dispatch => {
  console.log(data, "SET POKEMON INFO ACTION CHECK");
  return dispatch({
    type: SET_POKEMONINFO,
    data: data
  });
};

export const receivedData = () => {
  return {
    type: "ReceivedData",
    data: true
  };
};

export const gatherStats = (pokemonInfo, match) => async dispatch => {
  console.log(pokemonInfo, match);
  try {
    const element = pokemonInfo[match - 1];
    const statsArray = element.stats;
    const base_stat = statsArray.map(object => {
      return object.base_stat;
    });

    return dispatch({
      type: "GATHER_STATS",
      data: base_stat
    });
  } catch (e) {
    console.log(e);
  }
};

export const abilityName = (info, index) => async dispatch => {
  console.log("props for abilityName Action", index, info);
  try {
    const abilityObject = info[index - 1].abilities;
    const abilityNames = abilityObject.map((element, index) => {
      return element.ability.name;
    });
    console.log("ABILITY NAME CHECK", abilityNames);
    return dispatch({
      type: "GET_ABILITY_NAME",
      data: abilityNames
    });
  } catch (e) {
    console.log("error in getting abilityName Action");
  }
};

export const getAbility = (info, index) => async dispatch => {
  try {
    console.log("Passed in props check in Action abilityName", info, index);
    const abilityObject = info[index - 1].abilities;
    const urls = abilityObject.map(element => {
      return element.ability.url;
    });

    const responseMap = await urls.reduce((accumulator, urls) => {
      console.log("CHECKING URLS", urls);
      const def = new Promise(async (resolve, reject) => {
        try {
          const response = await fetch(urls);
          const results = await response.json();

          resolve(results);
        } catch (e) {
          console.log("FAILED");
          reject(e);
        }
      });
      accumulator.push(def);
      return accumulator;
    }, []);

    const descriptions = await Promise.all(responseMap);
    console.log(descriptions, "ABILITY DESCRIPTIONS");
    const abilityDescriptions = descriptions.map((object, index) => {
      const tempArray = object.effect_entries;
      const finalArray = tempArray.filter(
        element => element.language.name === "en"
      );
      return finalArray[0].short_effect;
    });
    console.log(abilityDescriptions, "ability Descriptions check");

    return dispatch({
      type: "GET_ABILITY",
      data: abilityDescriptions
    });
  } catch (e) {
    console.log(e);
  }
};
