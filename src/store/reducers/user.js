let initialState = {
  currentUser: {
    name: "Nguyễn",
    token: "Bình",
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_USER": {
      return {
        ...state,
        currentUser: {
          name: action.payload.name,
          token: action.payload.token,
        },
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
