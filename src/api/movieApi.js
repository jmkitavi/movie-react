import axios from 'axios';
import moment from "moment";

const api_key = "b830fe99b34180f5a50a662f90258090";

const addPosterUrl = (movie) => {
  if (movie.genres) {
    movie.genre_names = []
    movie.genres.map((genre) => {
      movie.genre_names.push(genre.name)
    })
  }
  if (!movie.poster_path) {
    movie.poster_url = `https://i.imgur.com/hwo0ca2.png`; // 550x750 place holder
  } else {
    movie.poster_url = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  }
  if (!movie.backdrop_path) {
    movie.backdrop_url = `https://i.imgur.com/H2Z8el2.png`; // 360x202 place holder
  } else {
    movie.backdrop_url = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
  }
  movie.release = moment(movie.released_date).format('ll');
  return movie;
}

class MovieApi {
  static getGenres() {
    return axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`)
      .then(response => {
        return response.data.genres
    }).catch(error => {
      return error
    })
  }

  static getMovie(movieId) {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}`
    return axios.get(url)
      .then(response => {
        return addPosterUrl(response.data);
      }).catch(error => {
        return error;
      });
  }

  static getPopularMovies() {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`
    return axios.get(url)
      .then(response => {
        const movies = response.data.results.map(addPosterUrl)
        return movies;
      }).catch(error => {
        return error;
      });
    }

  static getUpcomingMovies() {
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}`
    return axios.get(url)
      .then(response => {
        const movies = response.data.results.map(addPosterUrl)
        return movies;
      }).catch(error => {
        return error;
      });
    }

    static getMoviesByGenre(genreId) {
      const url = "https://api.themoviedb.org/3/genre/35/movies?api_key=b830fe99b34180f5a50a662f90258090"
      // const url = `https://api.themoviedb.org/3/genre/${genreId}/movies?api_key=${api_key}`
      return axios.get(url)
        .then(response => {
          const movies = response.data.results.map(addPosterUrl)
          return movies
        }).catch(error => {
          return error
        })
    }
}

export default MovieApi;