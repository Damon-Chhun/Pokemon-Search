import { SET_POKEMONINFO } from "../action";

const initialState = {
  pokemonInfo: []
};

export default function(state = initialState, action) {
  const { type, data } = action;
  switch (type) {
    case SET_POKEMONINFO:
      return {
        ...state,
        pokemonInfo: state.pokemonInfo.concat(data)
      };

    default:
      return state;
  }
}
