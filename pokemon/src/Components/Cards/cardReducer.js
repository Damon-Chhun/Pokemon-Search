import { GET_POKEMONS } from "../action";

const initialState = {
  pokemons: []
};

export default function(state = initialState, action) {
  const { type, data } = action;
  switch (type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: data || []
      };

    default:
      return state;
  }
}
