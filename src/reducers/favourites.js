const favouritesReducerDefault = [];

const favouritesReducer = (state = favouritesReducerDefault, action) => {
  switch (action.type) {
  case ('ADD_FAVOURITE'): {
    return state.concat(action.movie);
  }
  case ('REMOVE_FAVOURITE'): {
    return state.filter(({ id }) => id !== action.id);
  }
  default: {
    return state;
  }
  }
};

export default favouritesReducer
