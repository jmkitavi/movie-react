import React, { Component } from 'react';
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import * as movieActions from "../../actions/movieActions";


class MoviePage extends Component {
  componentDidMount() {
    if (!this.props.movie) {
      this.props.dispatch(movieActions.loadMovie(this.props.params.id));
    }
  }

  render() {
    if (!this.props.movie) {
      return (
        <div>Just wait</div>
      )
    }
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <div className="row">
            <div className="col-md-4">
              <img src={this.props.movie.poster_url} alt={this.props.movie.title} />
            </div>
            <div className="col-md-6 col-md-offset-2">
              <h1 className="review_title">{this.props.movie.title}</h1>
              <p>{this.props.movie.overview}</p>
              <div className="table-responsive">
                <table className="table">
                  <tbody>
                    {/* <tr>
                      <td><strong>Genre:</strong></td>
                      {<td>{this.state.genres}</td>}
                    </tr> */}
                    <tr>
                      <td><strong>Release:</strong></td>
                      <td>{this.props.movie.release_date}</td>
                    </tr>
                    <tr>
                      <td><strong>Length:</strong></td>
                      <td>{this.props.movie.runtime} min.</td>
                    </tr>
                    <tr>
                      <td><strong>Average Rating:</strong></td>
                      <td>{this.props.movie.vote_average}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MoviePage.propTypes = {
  movie: PropTypes.object.isRequired
};

// Function to filter movie to be displayed by ID
function getMovieById(movies, id) {
   /* eslint-disable */
  const movie = movies.filter(movie => movie.id == id);
  /* eslint-enable */
  if (movie) return movie[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  console.log(state)
  const movieId = ownProps.params.id;  // from /course/:id
  let movie = {};
  if (movieId && state.movies.length > 0) {
    movie = getMovieById(state.movies, movieId)
    return {
      movie: movie
    }
  } else {
    console.log(`${movieId} doesn't exist in state`)
    return {
      movie: null
    }
  }
}
export default connect(mapStateToProps)(MoviePage);
