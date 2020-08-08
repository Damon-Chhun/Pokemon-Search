import { SET_POKEMONINFO } from "../action";

const initialState = {
  pokemonInfo: [],
  stats: [],
  statsNames: ["HP", "Attack", "Defense", "Sp.Atk", "Sp.Def", "Speed", "Total"]
};

export default function(state = initialState, action) {
  const { type, data } = action;
  switch (type) {
    case SET_POKEMONINFO:
      return {
        ...state,
        pokemonInfo: state.pokemonInfo.concat(data)
      };
    case "GATHER_STATS":
      return {
        ...state,
        stats: data
      };

    default:
      return state;
  }
}
