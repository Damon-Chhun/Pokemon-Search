import { GET_OFFSET, GET_POKEMONS } from "../action";

const initialState = {
  value: 0
};

export default function(state = initialState, action) {
  const { type, data } = action;
  switch (type) {
    case GET_OFFSET:
      return {
        ...state,
        value: data
      };
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: data
      };

    default:
      return state;
  }
}
