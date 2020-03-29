//this is a component to render movie cards in a list of movie, whether it is top_rated or popular movie

import React, {Component} from 'react'; 
import axios from 'axios';

class MovieCard extends Component {
    state = {
        movies: []
    }

    componentDidMount() {
    const type = this.props.type; //the type whether this is a top_rated movies or popular movies
    const api_key= "f4405389d2c4c04e87e2a7b8edff703b"

    //get the movie via AJAX with axios
    axios.get(`https://api.themoviedb.org/3/movie/${type}?api_key=${api_key}&language=en-US&page=1`)
        .then(res => {
            const movies = res.data.results;
            this.setState({ movies });
        })
    }

    render() {
        return (
            <ul className="row list-unstyled">
                {this.state.movies.map(movie => 
                    <li className="movie-card col-sm-6 col-sm-3 col-md-2">
                        <a href="#">
                            <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} />
                            <div class="movie-card--title">
                                <p class="flex rating"><img src="/icons/star.svg" /> {movie.vote_average}</p>
                                <p>{movie.title}</p>
                            </div>
                        </a>
                    </li>
                )}
            </ul>
                
        )
    }
}

export default MovieCard;