//this is a component to render movie casts in a list of movie casts in a movie detail page. It needs movie id parameter as a props

import React, {Component} from 'react'; 
import axios from 'axios';

class MovieCasts extends Component {
    state = {
        movieCasts: []
    }

    componentDidMount() {
    const movie_id = this.props.movie_id; //the type whether this is a top_rated movies or popular movies
    const api_key= "f4405389d2c4c04e87e2a7b8edff703b"

    //get the movie via AJAX with axios
    //get the movie casts via AJAX with axios
    axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${api_key}
    `)
        .then(res => {
            const casts = res.data.cast;
            this.setState({ movieCasts: casts  });
        })
    }

    render() {
        return (
            <ul className="row list-unstyled">
                {this.state.movieCasts.map(cast => 
                    <li className="movie-card col-sm-6 col-sm-3 col-md-2">
                        <a href={`${cast.id}`}>
                            <img src={`https://image.tmdb.org/t/p/w300${cast.profile_path}`} />
                            <div class="movie-card--title">
                                <p>{cast.name} as {cast.character}</p>
                            </div>
                        </a>
                    </li>
                )}
            </ul>
                
        )
    }
}

export default MovieCasts;