import { Component } from 'react';
import SearchForm from '../components/SearchForm';
import MoviesList from '../components/MoviesList';
import moviesApi from '../services/movies-api';

class MoviesPage extends Component {
  state = {
    movies: [],
    error: null,
  };

  onSubmit = query => {
    moviesApi
      .fetchMoviesByKeyword(query)
      .then(movies => this.setState({ movies }))
      .catch(error => this.setState({ error }));
  };

  render() {
    const { movies } = this.state;

    return (
      <>
        <SearchForm onSubmit={this.onSubmit} />
        <MoviesList movies={movies} />
      </>
    );
  }
}

export default MoviesPage;
