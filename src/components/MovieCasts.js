//this is a component to render movie casts in a list of movie casts in a movie detail page. It needs movie id parameter as a props

import React, {Component} from 'react'; 
import axios from 'axios';

import {
    Link
  } from "react-router-dom";

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
            <div className="row">
                <ul className="cast-card-container list-unstyled col-12">
                    {this.state.movieCasts.map(cast => 
                        <li className="cast-card">
                            <Link to={ `/casts/${cast.id}` } title={cast.name}>
                                <div className="image-container">
                                    {/* Render the image from API if there is a profile_path */}
                                    {cast.profile_path &&
                                        <img src={`https://image.tmdb.org/t/p/w300${cast.profile_path}`} alt={`${cast.name} Picture`} />
                                    }
                                    {!cast.profile_path &&
                                        <img className="backstage-img" src="/icons/backstage.svg" alt={`${cast.name} Picture`} />
                                    }
                                </div>
                                <div class="cast-card--title">
                                    <p>{cast.name} as {cast.character}</p>
                                </div>
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
            
                
        )
    }
}

export default MovieCasts;