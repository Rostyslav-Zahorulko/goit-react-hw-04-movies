import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import routes from './routes';

const App = () => {
  return (
    <>
      <AppBar />

      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route exact path={routes.movies} component={MoviesPage} />
        <Route path={routes.movieDetails} component={MovieDetailsPage}></Route>
        <Route component={HomePage} />
      </Switch>
    </>
  );
};

export default App;
