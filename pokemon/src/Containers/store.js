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
  saveToLocalStorage(store.getState());
});

export default store;
