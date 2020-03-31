//this is a component to render movie cards in a list of movie, whether it is top_rated or popular movie

import React, {Component} from 'react'; 
import axios from 'axios';

import {
    Link
  } from "react-router-dom";

class MovieCard extends Component {
    state = {
        movies: []
    }

    componentDidMount() {
        const queryString = require('query-string');
        const parsedQueryString = queryString.parse(window.location.search);
        console.log(parsedQueryString);
        const searchName = parsedQueryString.name;
        const page = "1";
        const type = this.props.type; //the type whether this is a top_rated movies or popular movies
        const actor_id = this.props.actor_id;
        const api_key= "f4405389d2c4c04e87e2a7b8edff703b";

        //get the movie via AJAX with axios

        //if this component will be rendered to the home or browse page, execute this code
        if(!actor_id) {
            axios.get(`https://api.themoviedb.org/3/movie/${type}?api_key=${api_key}&language=en-US&page=${page}`)
            .then(res => {
                const movies = res.data.results;
                this.setState({ movies });
            })
        }
        

        //if this component will be rendered to the actor page, execute this code
        axios.get(`https://api.themoviedb.org/3/person/${actor_id}/movie_credits?api_key=${api_key}&&query=your&language=en-US`)
        .then(res => {
            const movies = res.data.results;
            this.setState({ movies });
        })

        //if this component will be rendered to the search result page, execute this code
        if(this.props.type === "search") {
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchName}&language=en-US&page=${page}&include_adult=false`)
            .then(res => {
                const movies = res.data.results;
                this.setState({ movies });
            })
        }
    
    }
    
    render() {
        return (
            <ul className="row list-unstyled">
                {this.state.movies.map(movie => 
                    <li className="movie-card col-sm-6 col-md-3 col-lg-2">
                        <Link to={ `/movies/${movie.id}` } title={movie.title}>
                            <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} />
                            <div class="movie-card--title">
                                <p class="flex rating"><img src="/icons/star.svg" /> {movie.vote_average}</p>
                                <p>{movie.title}</p>
                            </div>
                        </Link>
                    </li>
                )}
            </ul>
                
        )
    }
}

export default MovieCard;