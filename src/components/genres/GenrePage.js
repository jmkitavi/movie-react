import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MoviePoster from '../movies/MoviePoster';
import * as movieActions from "../../actions/movieActions";
import * as genreActions from "../../actions/genresActions";

class GenrePage extends Component {
  componentDidMount() {
    if (this.props.genres.length < 1) {
      this.props.dispatch(genreActions.loadGenres())
    }
    console.log(this.props)
    this.props.dispatch(movieActions.loadMoviesByGenre(35));
  }
  render() {
    if (!this.props.movies) {
      return (
        <div class="loader"></div>
      )
    }
    return (
      <div className="row">
        {this.props.movies.map((movie) => {
          if (movie.genre_ids) {
            movie.genre_names = []
            movie.genre_ids.map(id => {
              this.props.genres.map(genre => {
                // eslint-disable-next-line
                if (id == genre.id) {
                  movie.genre_names.push(genre.name)
                }
              })
            })
          }
          return <MoviePoster key={movie.id} movie={movie} />
        })
        }
    </div>
    );
  }
}

GenrePage.propTypes = {
  movies: PropTypes.array.isRequired,
  genres: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    genres: state.genres,
    movies: state.movies
  };
}

export default connect(mapStateToProps)(GenrePage);
