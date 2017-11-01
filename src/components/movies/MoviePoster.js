import React from 'react';
import PropTypes from 'prop-types';
import { Link }from 'react-router';

const MoviePoster = ({movie}) => {
  return (
  <div className="col-sm-6 col-md-4">
      <div className="hovereffect">
      <Link to={'/movie/' + movie.id}>
        <img className="img-responsive" src={movie.backdrop_url} alt={movie.title}/>
        <div className="overlay">
          <h2>{movie.title}</h2>
          <p>
          {movie.release}
          <br/>
          {movie.genre_names.join(", ")}
        </p>
        </div>
        </Link>
      </div>
  </div>
  );
};

MoviePoster.propTypes = {
  movie: PropTypes.object.isRequired
};

export default MoviePoster;