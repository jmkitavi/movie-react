import * as types from "./actionTypes";                        // get all action types to be passed in disptch function
import MovieAPI from "../api/movieApi";                                      // get function of api, fetching movies etc

export function loadPopularMoviesSuccess(movies) {
  return {type: types.LOAD_POPULAR_MOVIES_SUCCESS, movies}     // return action type plus data(movies)
}

export function loadPopularMovies() {                   // function that does the loading
  return dispatch => {
    return MovieAPI.getPopularMovies().then(movies => {                 // calls the api to make the request
      dispatch(loadPopularMoviesSuccess(movies));              // dispatches to load..success with movies
    }).catch(error => console.log(error));                     // if error logs, or dispatches load..error action with error
  }
}