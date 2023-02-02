export const ADD_FAVORITE = "ADD_CHARACTER";
export const DELETE_FAVORITE = "DELETE_CHARACTER";

export const addFavorite = (char) => {
  return {
    type: ADD_FAVORITE,
    payload: char,
  };
};

export const deleteFavorite = (id) => {
  return {
    type: DELETE_FAVORITE,
    payload: id,
  };
};
