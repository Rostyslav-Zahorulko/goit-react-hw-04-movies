import { Component } from 'react';
import { Route } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import AdditionalNavigation from '../components/AdditionalNavigation';
import ApologyMessage from '../components/ApologyMessage';
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';
import moviesApi from '../services/movies-api';
import defaultMoviePoster from '../images/defaultMoviePoster.jpg';

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
    const { path } = this.props.match;

    const {
      poster_path,
      title,
      name,
      release_date,
      vote_average,
      overview,
      genres,
      error,
    } = this.state;

    // console.log('poster_path: ', poster_path);
    // console.log('release_date: ', release_date);
    // console.log('vote_average: ', vote_average);
    // console.log('genres: ', genres);

    const imgSrc = poster_path
      ? moviesApi.imageBaseUrl + poster_path
      : defaultMoviePoster;
    const movieReleaseYear = release_date ? this.getReleaseYear() : null;
    const userScore = vote_average ? this.getUserScore() : null;
    const movieGenres = genres ? this.getGenres() : null;

    // console.log('imgSrc: ', imgSrc);
    // console.log('movieReleaseYear: ', movieReleaseYear);
    // console.log('userScore: ', userScore);
    // console.log('movieGenres', movieGenres);

    const options = {
      imgSrc,
      title,
      name,
      movieReleaseYear,
      userScore,
      overview,
      movieGenres,
    };

    return (
      <>
        {!error ? (
          <>
            <MovieCard options={options} />
            <AdditionalNavigation />
          </>
        ) : (
          <ApologyMessage />
        )}

        <Route path={`${path}/cast`} component={Cast} />
        <Route path={`${path}/reviews`} component={Reviews} />
      </>
    );
  }
}

export default MovieDetailsPage;
