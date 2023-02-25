import { Outlet, useParams, useLocation } from 'react-router-dom';
import { LinkToHome, BoxLink, Info, Details, Img, Title, BoxScore, Score, Overview, Text } from './MovieDetails.styled';
import { useEffect, useState } from 'react';
import { movieInfo } from '../../../services/api';

const imgUrl = 'https://image.tmdb.org/t/p/w200';

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movieDetails, setMovieDetails] = useState();
    const location = useLocation();
    const backHome = location.state?.from ?? '/';

    useEffect(() => {
        movieInfo(movieId)
            .then(({ data }) => setMovieDetails(data))
            .catch(error => error);
    }, [movieId]);

    console.log(movieId)

    if (!movieDetails) {
        return null;
    }

    const { poster_path, title, vote_average, overview, genres } = movieDetails
    const vote = Math.round(vote_average) * 10;

    return (
        <>
            <BoxLink>
                <LinkToHome to={backHome}>Go back</LinkToHome>
            </BoxLink>
            <Info>
                <Img src={`${imgUrl}${poster_path}`} alt={title} />
                <Details>
                    <Title>{title}</Title>
                    <BoxScore><Score>User Score:</Score> {vote}%</BoxScore>
                    <Overview>Overview:</Overview>
                    <Text>{overview}</Text>
                    <BoxScore><Score>Genres:</Score> {genres.map(e => <span key={e.id}>{e.name}</span>)}</BoxScore>
                </Details>

            </Info>
            <BoxScore>
                <BoxLink>
                    <LinkToHome to='cast'>Cast</LinkToHome>
                </BoxLink>

                <BoxLink>
                    <LinkToHome to='Reviews'>Reviews</LinkToHome>
                </BoxLink>
            </BoxScore>

            <Outlet />
        </>


    )
}

export default MovieDetails;