import { Component, Suspense, lazy } from 'react';
import { Route } from 'react-router-dom';
import routes from '../routes';
import GoBackButton from '../components/GoBackButton';
import MovieCard from '../components/MovieCard';
import AdditionalNavigation from '../components/AdditionalNavigation';
import ApologyMessage from '../components/ApologyMessage';
import moviesApi from '../services/movies-api';
import defaultMoviePoster from '../images/defaultMoviePoster.jpg';

const Cast = lazy(() =>
  import('../components/Cast/' /* webpackChunkName: "cast" */),
);
const Reviews = lazy(() =>
  import('../components/Reviews/' /* webpackChunkName: "reviews" */),
);

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

  handleGoBack = () => {
    const { history, location } = this.props;

    // if (location.state && location.state.from) {
    //   return history.push(location.state.from);
    // }

    // history.push(routes.home);

    history.push(location?.state?.from || routes.home);
  };

  render() {
    const { match } = this.props;

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
      title,
      name,
      overview,
      imgSrc,
      movieReleaseYear,
      userScore,
      movieGenres,
    };

    return (
      <>
        {!error ? (
          <>
            <GoBackButton onClick={this.handleGoBack} />
            <MovieCard options={options} />
            <AdditionalNavigation>
              <h3>Additional information</h3>
            </AdditionalNavigation>
          </>
        ) : (
          <ApologyMessage />
        )}

        <Suspense fallback={<div>Loading...</div>}>
          <Route path={`${match.path}/cast`} component={Cast} />
          <Route path={`${match.path}/reviews`} component={Reviews} />
        </Suspense>
      </>
    );
  }
}

export default MovieDetailsPage;
