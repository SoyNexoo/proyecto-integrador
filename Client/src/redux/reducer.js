import { ADDFAVORITE, DELETEFAVORITE, FILTER, ORDER, SHOWALL } from "./types";

const initialState = {
  favorites: [],
  allCharacters: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADDFAVORITE:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };
    case DELETEFAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((char) => char.id !== action.payload),
        allCharacters: state.allCharacters.filter(
          (char) => char.id !== action.payload
        ),
      };
    case FILTER:
      return {
        ...state,
        favorites: state.allCharacters.filter(
          (pj) => pj.gender === action.payload
        ),
      };
    case ORDER:
      let copia = state.allCharacters.sort((a, b) => {
        if (action.payload === "A") {
          if (a.id > b.id) return 1;
          if (a.id < b.id) return -1;
          return 0;
        } else {
          if (a.id > b.id) return -1;
          if (a.id < b.id) return 1;
          return 0;
        }
      });
      return {
        ...state,
        favorites: copia,
      };
    case SHOWALL:
      return { ...state, favorites: state.allCharacters };
    default:
      return state;
  }
}
