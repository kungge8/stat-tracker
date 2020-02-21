export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('villageIdleGameState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('villageIdleGameState', serializedState);
  } catch {
    // ignore write errors
  }
};