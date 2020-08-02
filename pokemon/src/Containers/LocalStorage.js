export function loadFromLocalStorage() {
  try {
    const checkingState = sessionStorage.getItem("store");
    if (checkingState === null) {
      return undefined;
    }
    return JSON.parse(checkingState);
  } catch (err) {
    console.log(err);
    return undefined;
  }
}

export function saveToLocalStorage(store) {
  try {
    const checkingState = JSON.stringify(store);
    sessionStorage.setItem("store", checkingState);
  } catch (err) {}
}
