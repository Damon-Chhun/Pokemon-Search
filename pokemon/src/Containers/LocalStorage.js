export const loadFromLocalStorage = () => {
  try {
    const checkingState = localStorage.getItem("store");
    if (checkingState === null) {
      return undefined;
    }
    return JSON.parse(checkingState);
  } catch (err) {
    return undefined;
  }
};

export const saveToLocalStorage = state => {
  try {
    const checkingState = JSON.stringify(state);
    localStorage.setItem("store", checkingState);
  } catch (err) {
    return undefined;
  }
};
