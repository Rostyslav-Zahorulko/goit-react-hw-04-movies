import { Component } from 'react';
import FilmsList from '../components/FilmsList';
import filmsApi from '../services/films-api';

class HomePage extends Component {
  state = { films: [] };

  componentDidMount() {
    filmsApi.fetchTrends().then(trends => this.setState({ films: trends }));
  }

  render() {
    const { films } = this.state;

    return (
      <>
        <h1>Trending today</h1>
        <FilmsList films={films} />
      </>
    );
  }
}

export default HomePage;
