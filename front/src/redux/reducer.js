//import store from "./store";
import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_FAVORITE:
      return {
        ...state,
        myFavorites: [...state.myFavorites, payload], // payload = character
        allCharacters: [...state.myFavorites, payload],
      };
    case DELETE_FAVORITE:
      const filtro = state.myFavorites.filter((char) => {
        return char.id !== payload; // payload = id
      });
      return {
        ...state,
        myFavorites: filtro,
        allCharacters: filtro,
      };
    case FILTER:
      if (payload === "All") {
        return {
          ...state,
          myFavorites: [...state.allCharacters],
        };
      }
      let filterArray = [...state.allCharacters].filter(
        (char) => char.gender === payload
      );
      return {
        ...state,
        myFavorites: filterArray,
      };

    case ORDER:
      let copiaArray;
      state.myFavorites.length === state.allCharacters.length
        ? (copiaArray = [...state.allCharacters])
        : (copiaArray = [...state.myFavorites]);

      let filterid;
      if (payload === "Ascendente") {
        filterid = copiaArray.sort((charA, charB) => charA.id - charB.id);
      }
      if (payload === "Descendente") {
        filterid = copiaArray.sort((charA, charB) => charB.id - charA.id);
      }
      return {
        ...state,
        myFavorites: filterid,
      }

    default:
      return { ...state };
  }
}
