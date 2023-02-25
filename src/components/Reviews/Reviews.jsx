import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { reviewsFetch } from '../../services/api'

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviewFilm, setReviewFilm] = useState([])

  useEffect(() => {
    reviewsFetch(movieId).then(({ data }) => setReviewFilm(data.results)).catch(error => error)
  }, [movieId])

  if (!reviewFilm) {
    return null
  }

  return (
    reviewFilm.length > 0 ? (<ul>
      {reviewFilm.map(({ content, author, id }) => {
        return <li key={id}>
          <p>Author: {author}</p>
          <p>{content}</p>
        </li>
      })}
    </ul>) : <p>Review not found</p>

  );
};