import { GET_POKEMONS } from "../action";

const initialState = {
  pokemons: []
  // pokemonInfo: []
};

export default function(state = initialState, action) {
  const { type, data } = action;
  switch (type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: data
      };

    /* case SET_POKEMONINFO:
      return {
        ...state,
        pokemonInfo: data
      }; */

    default:
      return state;
  }
}
