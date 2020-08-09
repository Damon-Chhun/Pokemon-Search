export function loadFromLocalStorage() {
  try {
    localStorage.removeItem("store");
    const checkingState = localStorage.getItem("store");
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
    localStorage.setItem("store", checkingState);
  } catch (err) {}
}
