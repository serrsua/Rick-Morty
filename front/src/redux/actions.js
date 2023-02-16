import axios from "axios";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const DELETE_FAVORITE = "DELETE_FAVORITE";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

export const addFavorite = (char) => {
  return async function (dispatch) {
    try {
      const { data } = await axios.post(
        "http://localhost:3001/rickandmorty/fav",
        char
      );
      dispatch({
        type: ADD_FAVORITE,
        payload: data,
      });
    } catch (error) {
      return error;
    }
  };
};

export const deleteFavorite = (id) => {
  return async function (dispatch) {
    try {
      const {data} = await axios.delete(
        `http://localhost:3001/rickandmorty/fav/${id}`
      );
      dispatch({
        type: DELETE_FAVORITE,
        payload: data.id,
      });
    } catch (error) {
      return error;
    }
  };
};

export const filterCards = (status) => {
  return {
    type: FILTER,
    payload: status,
  };
};

export const orderCards = (id) => {
  return {
    type: ORDER,
    payload: id,
  };
};
