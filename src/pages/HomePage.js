import { Component } from 'react';
import MoviesList from '../components/MoviesList';
import moviesApi from '../services/movies-api';

class HomePage extends Component {
  state = {
    movies: [],
    error: null,
  };

  componentDidMount() {
    moviesApi
      .fetchTrends()
      .then(trends => this.setState({ movies: trends }))
      .catch(error => this.setState({ error }));
  }

  render() {
    const { movies } = this.state;

    return (
      <>
        <h1>Trending today</h1>
        <MoviesList movies={movies} />
      </>
    );
  }
}

export default HomePage;
