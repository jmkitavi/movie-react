import React, { Component } from 'react';
import axios from 'axios';

class MoviePage extends Component {
  constructor(props) {
    super(props);
    this.state = { "movies": [], image: '', genres: ''}
    this.fetch = this.fetch.bind(this);
    this.baseImage = 'https://image.tmdb.org/t/p/w500';
  }

  componentWillMount() {
    this.fetch();
  }

  fetch() {
    const url = `https://api.themoviedb.org/3/movie/${this.props.params.id}?api_key=b830fe99b34180f5a50a662f90258090`;
    return axios.get(url)
      .then(response => {
        this.setState({
          movies: response.data,
          image: this.baseImage + response.data.poster_path,
          genres: response.data.genres[0].name
        });
      })
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <div className="row">
            <div className="col-md-4">
              
              <img src={this.state.image} alt={this.state.movies.title} />
            </div>
            <div className="col-md-6 col-md-offset-2">
              <h1 className="review_title">{this.state.movies.title}</h1>
              <p>{this.state.movies.overview}</p>
              <div className="table-responsive">
                <table className="table">
                  <tbody>
                    <tr>
                      <td><strong>Genre:</strong></td>
                      {<td>{this.state.genres}</td>}
                    </tr>
                    <tr>
                      <td><strong>Release:</strong></td>
                      <td>{this.state.movies.release_date}</td>
                    </tr>
                    <tr>
                      <td><strong>Length:</strong></td>
                      <td>{this.state.movies.runtime} min.</td>
                    </tr>
                    <tr>
                      <td><strong>Average Rating:</strong></td>
                      <td>{this.state.movies.vote_average}</td>
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

export default MoviePage;
