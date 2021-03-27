const FilmsList = ({ films }) => {
  return (
    <ul>
      {films.map(({ id, title, name }) => (
        <li key={id}>{title || name}</li>
      ))}
    </ul>
  );
};

export default FilmsList;
