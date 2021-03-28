import './MovieCard.scss';

const MovieCard = ({ options }) => {
  const {
    imgSrc,
    title,
    name,
    movieReleaseYear,
    userScore,
    overview,
    movieGenres,
  } = options;

  return (
    <div className="MovieCard">
      <img width={200} src={imgSrc} alt={title || name} />

      <div className="MovieCard__content">
        <h2>
          {title || name} ({movieReleaseYear})
        </h2>
        <p>User Score: {userScore}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h4>Genres</h4>
        <p>{movieGenres}</p>
      </div>
    </div>
  );
};

export default MovieCard;
