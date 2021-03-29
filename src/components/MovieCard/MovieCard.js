import './MovieCard.scss';

const MovieCard = ({ options }) => {
  const {
    title,
    name,
    overview,
    imgSrc,
    movieReleaseYear,
    userScore,
    movieGenres,
  } = options;

  return (
    <div className="MovieCard">
      <img width={200} src={imgSrc} alt={title || name} />

      <div className="MovieCard__content">
        <h1>
          {title || name} ({movieReleaseYear})
        </h1>
        <p>User Score: {userScore}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{movieGenres}</p>
      </div>
    </div>
  );
};

export default MovieCard;
