export function isValidName({ getState, dispatch }){
  return function (next) {
    return function (action) {
      let state = getState();
      console.log(state);
      return next(action);
    };
  };
}
