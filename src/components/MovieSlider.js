//this is a component to render movie cards in a list of movie, whether it is top_rated or popular movie

import React, {Component} from 'react'; 
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel'

import {
    Link
  } from "react-router-dom";

class MovieSlider extends Component {
    state = {
        movies: [],
    }

    componentDidMount() {

        //the type whether this is a top_rated movies or popular movies or movies from search page
        const type = this.props.type; 

        //the API key
        const api_key= "f4405389d2c4c04e87e2a7b8edff703b";

        //get the movie via AJAX with axios

        //if this component will be rendered to the home or browse page, execute this code
        axios.get(`https://api.themoviedb.org/3/movie/${type}?api_key=${api_key}&language=en-US&page=1`)
        .then(res => {
            const movies = res.data.results;

            this.setState({ 
                movies: movies,
            });
        })
    }
    
    render() {

        return (
            <Carousel
                controls="false"
            >
                {
                    this.state.movies.slice(0, parseInt(this.props.count)).map(movie=>
                        <Carousel.Item>
                            <Link to={ `/movies/${movie.id}`}>
                                <div className="carousel-img-container">
                                    <img
                                    className="d-block w-100"
                                    src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                                    alt={`${movie.title} Poster`}
                                    /> 
                                    <div class="overlay"></div>  
                                </div>
                                <Carousel.Caption>
                                    <h3>{movie.title}</h3>
                                    <p>{movie.overview}</p>
                                </Carousel.Caption>
                            </Link>
                        </Carousel.Item>
                        )
                }
                
    
            </Carousel>
        )
    }
}

export default MovieSlider;