import { combineReducers } from "redux";
import card from "../Components/Cards/cardReducer.js";
import pagination from "../Components/Pagination/PaginationReducer.js";
import pokemonInfo from "../Components/PokemonInfo/PokemonInfoReducer.js";

const rootReducer = combineReducers({
  card,
  pagination,
  pokemonInfo
});

export default rootReducer;
