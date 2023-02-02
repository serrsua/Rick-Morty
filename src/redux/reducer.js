//import store from "./store";
import { ADD_FAVORITE, DELETE_FAVORITE } from "./actions";

const initialState = {
  myFavorites: [],
};

export default function reducer (state = initialState, {type, payload}) {
  switch (type) {
    case ADD_FAVORITE:
      return {
        ...state,
        myFavorites: [...state.myFavorites, payload], // payload = character
      };
    case DELETE_FAVORITE:
      const filtro = state.myFavorites.filter((char)=>{
        return char.id !== payload // payload = id
      })
      return {
        ...state,
        myFavorites: filtro,
      };

    default:
      return { ...state };
  }
};
