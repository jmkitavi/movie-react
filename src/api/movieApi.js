import axios from 'axios';

class MovieApi {
  // static getMovie(movieId) {
  //   return new Promise((resolve, reject) => {
  //     resolve(Object.assign({}, movie))
  //   })
  // }

  static getPopularMovies() {
    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=b830fe99b34180f5a50a662f90258090&language=en-US&page=1'
    return axios.get(url)
      .then(response => {
        return response;
      }).catch(error => {
        return error;
      });
    }

}

export default MovieApi;