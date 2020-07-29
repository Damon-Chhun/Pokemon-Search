import rootReducer from "./rootReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import { loadFromLocalStorage, saveToLocalStorage } from "./LocalStorage";

const middleware = [logger, thunk];

const persistedState = loadFromLocalStorage();

const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(...middleware))
);

store.subscribe(() => {
  saveToLocalStorage(
    store.getState()
    /* {
    card: store.getState().card.pokemons,
    pokemonInfo: store.getState().pokemonInfo.pokemonInfo,
    statsNames: store.getState().pokemonInfo.statsNames
    stats: store.getState().pokemonInfo.stats
  } */
  );
});

export default store;
