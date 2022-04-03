export const addFavourite = ({ title = '', id = '' } = {}) => ({
  type: 'ADD_FAVOURITE',
  movie: {
    title,
    id
  }
});

export const removeFavourite = ({ id } = {}) => ({
  type: 'REMOVE_FAVOURITE',
  id
});
