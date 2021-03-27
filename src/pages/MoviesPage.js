import { Component } from 'react';
import SearchForm from '../components/SearchForm';
import FilmsList from '../components/FilmsList';
import filmsApi from '../services/films-api';

class MoviesPage extends Component {
  state = {
    films: [],
  };

  onSubmit = query => {
    filmsApi.fetchFilm(query).then(films => this.setState({ films }));
  };

  render() {
    const { films } = this.state;

    return (
      <>
        <SearchForm onSubmit={this.onSubmit} />
        <FilmsList films={films} />
      </>
    );
  }
}

export default MoviesPage;
