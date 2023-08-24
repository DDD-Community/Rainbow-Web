export const saveRecoilStateToSessionStorage = <T,>(key: string, state: T): void => {
  try {
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem(key, serializedState);
  } catch (error) {
    console.error("Error saving Recoil state to Session Storage:", error);
  }
};

export const loadRecoilStateFromSessionStorage = <T,>(key: string, defaultValue: T): T => {
  try {
    const serializedState = sessionStorage.getItem(key);
    if (serializedState === null) {
      return defaultValue;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.error("Error loading Recoil state from Session Storage:", error);
    return defaultValue;
  }
};
