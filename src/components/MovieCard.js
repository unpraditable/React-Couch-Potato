import React, {Component} from 'react'; 
import axios from 'axios';

class MovieCard extends Component {
    state = {
        movies: []
    }

    componentDidMount() {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=f4405389d2c4c04e87e2a7b8edff703b&language=en-US&page=1`)
        .then(res => {
            const movies = res.data.results;
            this.setState({ movies });
        })
    }

    render() {
        return (
            <div className="row">
                {this.state.movies.map(movie => 
                    <div className="movie-card col-sm-6 col-sm-3 col-md-2">
                        <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} />
                        <div class="movie-card--title">
                            <p class="flex rating"><img src="/icons/star.svg" /> {movie.vote_average}</p>
                            <p>{movie.title}</p>
                        </div>
                    </div>
                )}
            </div>
                
        )
    }
}

export default MovieCard;