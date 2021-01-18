let category = {
  currentCategory: {
    name: "Giày",
    parentId: 23,
  },
};

const reducer = (state = category, action) => {
  switch (action.type) {
    case "CHANGE_CATEGORY": {
      return {
        ...state,
        currentCategory: {
          name: action.payload.name,
          parentId: action.payload.parentId,
        },
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
