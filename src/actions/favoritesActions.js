const addFavorite = (favorite) => ({
  type: 'ADD_FAVORITE',
  payload: {
    favorite,
  },
});

const deleteFavorite = (id) => ({
  type: 'DELETE_FAVORITE',
  payload: {
    id,
  },
});

export {
  addFavorite,
  deleteFavorite,
};
