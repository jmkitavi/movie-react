import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MoviePoster from '../movies/MoviePoster';
import * as movieActions from "../../actions/movieActions";

class HomePage extends Component {
  componentDidMount() {
    this.props.dispatch(movieActions.loadPopularMovies());
  }
  render() {
    if (!this.props.movies) {
      return (
        <div class="loader"></div>
      )
    }
    return (
      <div className="row">
        {this.props.movies.map((movie) => <MoviePoster key={movie.id} movie={movie} />)}
    </div>
    );
  }
}

HomePage.propTypes = {
  movies: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    movies: state.movies
  };
}

export default connect(mapStateToProps)(HomePage);
