import * as types from "./actionTypes";
import MovieAPI from "../api/movieApi";

export function loadGenresSuccess(genres) {
  return {type: types.LOAD_GENRES_SUCCESS, genres}
}

export function loadGenres() {
  return dispatch => {
    return MovieAPI.getGenres().then(genres => {
      dispatch(loadGenresSuccess(genres));
    }).catch(error => console.log(error));
  }
}
