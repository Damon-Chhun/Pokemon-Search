import { GET_POKEMONS } from "../action";

const initialState = {
  pokemons: [],
  pokemonLoadedAt: null
};

export default function(state = initialState, action) {
  const { type, data } = action;
  switch (type) {
    case GET_POKEMONS:
      return {
        pokemons: data,
        pokemonLoadedAt: new Date()
      };

    default:
      return state;
  }
}
