import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export const FilmList = ({ films, query }) => {
  return (
    <ul>
      {films.map(film => (
        <li key={film.id} >
          <Link to={`${film.id}`} state={{ from: `/movies?query=${query}` }} style={{color: '#000000'}}>
            {film.title ?? film.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

FilmList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    },
  )),
  query: PropTypes.string.isRequired,
};