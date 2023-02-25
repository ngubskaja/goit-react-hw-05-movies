import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import * as movieAPI from "../../../services/api"
import {Container, List, Item, Title} from './Home.styled'

const imgUrl = 'https://image.tmdb.org/t/p/w200';


const Home = () => {

    const [trendMovie, setTrendMovie] = useState([])

    useEffect(() => {
        movieAPI.trendingMovies().then(setTrendMovie);
    }, [])

    return (
        <Container>
            <List>
                {trendMovie.map(({ id, title, poster_path }) => {
                    return <Item key={id} style={{backgroundColor: 'rgb(47 9 60)'}}>
                        <Link to={`movies/${id}`}>
                        <img src={`${imgUrl}${poster_path}`} alt={title} /> 
                            <Title>{title}</Title>
                            </Link>
                    </Item>
                })}
            </List>
        </Container>
    )
}

export default  Home;