import { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Cast from '../components/Cast';
import moviesApi from '../services/movies-api';

class MovieDetailsPage extends Component {
  state = {
    poster_path: null,
    title: null,
    name: null,
    release_date: null,
    vote_average: null,
    overview: null,
    genres: null,
    error: null,
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;

    moviesApi
      .fetchMovieDetails(movieId)
      .then(movie => this.setState({ ...movie }))
      .catch(error => this.setState({ error }));
  }

  getReleaseYear = () => {
    const { release_date } = this.state;

    return release_date.split('-')[0];
  };

  getUserScore = () => {
    const { vote_average } = this.state;

    return vote_average * 10;
  };

  getGenres = () => {
    const { genres } = this.state;

    return genres.map(({ name }) => name).join(' ');
  };

  render() {
    const { url, path } = this.props.match;

    const {
      poster_path,
      title,
      name,
      release_date,
      vote_average,
      overview,
      genres,
    } = this.state;

    // console.log('release_date: ', release_date);
    // console.log('vote_average: ', vote_average);
    // console.log('genres: ', genres);

    const movieReleaseYear = release_date ? this.getReleaseYear() : null;
    const userScore = vote_average ? this.getUserScore() : null;
    const movieGenres = genres ? this.getGenres() : null;

    // console.log('movieReleaseYear: ', movieReleaseYear);
    // console.log('userScore: ', userScore);
    // console.log('movieGenres', movieGenres);

    return (
      <>
        <img
          src={`${moviesApi.imageBaseUrl}${poster_path}`}
          alt={title || name}
        />
        <h2>
          {title || name} {`(${movieReleaseYear})`}
        </h2>

        <p>User Score: {userScore + '%'}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h4>Genres</h4>
        <p>{movieGenres}</p>
        <p>Additional information</p>
        <ul>
          <li>
            <NavLink to={`${url}/cast`}>Cast</NavLink>
          </li>
          {/* <li>
            <NavLink to={}>Reviews</NavLink>
          </li> */}
        </ul>

        <Route path={`${path}/cast`} component={Cast} />
      </>
    );
  }
}

export default MovieDetailsPage;
