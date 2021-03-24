import { Component } from 'react';
import filmsApi from '../services/films-api';

class HomeView extends Component {
  state = { films: [] };

  componentDidMount() {
    filmsApi.fetchTrends().then(trends => this.setState({ films: trends }));
  }

  render() {
    const { films } = this.state;

    return (
      <>
        <h1>Trending today</h1>
        <ul>
          {films.map(({ id, title, name }) => (
            <li key={id}>{title || name}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default HomeView;
