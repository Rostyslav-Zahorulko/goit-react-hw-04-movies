import { NavLink, withRouter } from 'react-router-dom';
import './AdditionalNavigation.scss';

const AdditionalNavigation = ({ children, match }) => {
  const { url } = match;

  return (
    <nav className="AddNav">
      {children}

      <ul>
        <li>
          <NavLink
            to={`${url}/cast`}
            className="AddNavLink"
            activeClassName="AddNavLink--active"
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`${url}/reviews`}
            className="AddNavLink"
            activeClassName="AddNavLink--active"
          >
            Reviews
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default withRouter(AdditionalNavigation);
