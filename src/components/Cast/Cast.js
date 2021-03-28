import { Component } from 'react';
import moviesApi from '../../services/movies-api';
import defaultActorAvatar from '../../images/defaultActorAvatar.svg';

class Cast extends Component {
  state = {
    casts: [],
    error: null,
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;

    moviesApi
      .fetchMovieCredits(movieId)
      .then(casts => this.setState({ casts }))
      .catch(error => this.setState({ error }));
  }

  render() {
    const { casts } = this.state;

    return (
      <ul>
        {casts.map(({ id, name, profile_path, character }) => {
          const imgSrc = profile_path
            ? moviesApi.imageBaseUrl + profile_path
            : defaultActorAvatar;

          return (
            <li key={id}>
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
