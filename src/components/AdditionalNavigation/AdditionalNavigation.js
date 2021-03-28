import { NavLink, withRouter } from 'react-router-dom';
import './AdditionalNavigation.scss';

const AdditionalNavigation = ({ match }) => {
  const { url } = match;

  return (
    <>
      <p>Additional information</p>
      <ul>
        <li>
          <NavLink
            to={`${url}/cast`}
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`${url}/reviews`}
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Reviews
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default withRouter(AdditionalNavigation);
