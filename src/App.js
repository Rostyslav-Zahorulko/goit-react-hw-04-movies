import { Route, NavLink, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage';

const App = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink
            exact
            to="/"
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Movies
          </NavLink>
        </li>
      </ul>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movies" component={MoviesPage} />
        <Route
          exact
          path="/movies/:movieId"
          component={MovieDetailsPage}
        ></Route>
        <Route component={HomePage} />
      </Switch>
    </>
  );
};

export default App;
