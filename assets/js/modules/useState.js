export const useState = (initialState) => {
  let state = initialState;
  const setState = (newState) => {
    state = newState;
    return state;
  };
  return [state, setState];
};
