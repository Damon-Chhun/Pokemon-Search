import { GET_POKEMONS } from "../action";

const initialState = {
  pokemons: [],
  tempPokemon: [],
  pokemonLoadedAt: 0,
  needsFetching: null
};

export default function(state = initialState, action) {
  const { type, data } = action;
  switch (type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: state.pokemons.concat(data),
        pokemonLoadedAt: new Date(),
        needsFetching: true
      };
    case "ReceivedData":
      return {
        ...state,
        needsFetching: false
      };

    default:
      return state;
  }
}
