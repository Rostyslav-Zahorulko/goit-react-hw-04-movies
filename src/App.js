import { Route, NavLink, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';

const App = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="./movies">Movies</NavLink>
        </li>
      </ul>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/movies" component={MoviesPage} />
      </Switch>
    </>
  );
};

export default App;
