import { combineReducers } from "redux";
import movies from "./movieReducer";
import genres from "./genresReducer";

const rootReducer = combineReducers({
  movies,
  genres
});

export default rootReducer;

