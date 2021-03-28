import { NavLink } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, title, name }) => (
        <li key={id}>
          <NavLink to={`movies/${id}`}>{title || name}</NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
