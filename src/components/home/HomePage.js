import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = { "movies": [], image: '', genres: ''}
    this.fetch = this.fetch.bind(this);
    this.addPosterUrl = this.addPosterUrl.bind(this);
  }

  componentWillMount() {
    this.fetch();
  }

  fetch() {
    const url = 'https://api.themoviedb.org/3/discover/movie?api_key=b830fe99b34180f5a50a662f90258090&language=en-US&sort_by=popularity.desc&include_adult=true&page=1';
    return axios.get(url)
      .then(response => {
        this.setState({
          movies: this.addPosterUrl(response.data.results),
        });
      })
  }

  addPosterUrl(movies) {
    return movies.map(movie => {
      movie.poster_url = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      return movie;
    })
  }
  render() {
    return (
      <div className="row">
        {this.state.movies.map(function (movie) {
          return (
            <div className="col-sm-6 col-md-3" key={movie.id}>
              <div className="thumbnail">
                <Link to={'/movie/' + movie.id}><img src={movie.poster_url} alt={movie.title}/></Link>
              </div>
            </div>
          )
        })}
    </div>
    );
  }
}

export default HomePage;
