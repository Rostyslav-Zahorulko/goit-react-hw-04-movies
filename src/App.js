import { Route, NavLink, Switch } from 'react-router-dom';
import HomeView from './views/HomeView';

const App = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink exact to="/">
            HomeView
          </NavLink>
        </li>
        <li>Movies</li>
      </ul>

      <Route path="/" component={HomeView} />
    </>
  );
};

export default App;
