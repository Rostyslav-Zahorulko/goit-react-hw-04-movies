import { Component } from 'react';
import moviesApi from '../../services/movies-api';
import defaultActorAvatar from '../../images/defaultActorAvatar.svg';
import './Cast.scss';

class Cast extends Component {
  state = {
    cast: [],
    error: null,
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;

    moviesApi
      .fetchMovieCast(movieId)
      .then(actors => this.setState({ cast: actors }))
      .catch(error => this.setState({ error }));
  }

  render() {
    const { cast } = this.state;

    return (
      <ul>
        {cast.map(({ id, name, profile_path, character }) => {
          const imgSrc = profile_path
            ? moviesApi.imageBaseUrl + profile_path
            : defaultActorAvatar;

          return (
            <li className="CastList__item" key={id}>
              <img width={100} src={imgSrc} alt={name} />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Cast;
