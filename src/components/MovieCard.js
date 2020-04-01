//this is a component to render movie cards in a list of movie, whether it is top_rated or popular movie

import React, {Component} from 'react'; 
import axios from 'axios';
import MoviePagination from './MoviePagination.js';

import {
    Link
  } from "react-router-dom";

class MovieCard extends Component {
    state = {
        movies: [],
        totalPages : "",
        activePage : "1",
        searchTitle : "",
    }

    componentDidMount() {
        //variables to parse query string from URL into a proper object
        const queryString = require('query-string');
        const parsedQueryString = queryString.parse(window.location.search);

        //searchTitle is the title parameter in the search query on URL
        const searchTitle = parsedQueryString.title;

        //the type whether this is a top_rated movies or popular movies or movies from search page
        const type = this.props.type; 

        //the ID of the actor
        const actor_id = this.props.actor_id;

        //the API key
        const api_key= "f4405389d2c4c04e87e2a7b8edff703b";

        //the page for pagination
        let page = "1";
        if(parsedQueryString.page) {
            page = parsedQueryString.page;
        }

        //get the movie via AJAX with axios

        //if this component will be rendered to the home or browse page, execute this code
        if(!actor_id) {
            axios.get(`https://api.themoviedb.org/3/movie/${type}?api_key=${api_key}&language=en-US&page=${page}`)
            .then(res => {
                const movies = res.data.results;

                this.setState({ 
                    movies: movies,
                    totalPages : res.data.total_pages,
                    activePage: page,
                    searchTitle: searchTitle
                });
            })
        }

        //if this component will be rendered to the actor page, execute this code
        if(actor_id) {
            axios.get(`https://api.themoviedb.org/3/person/${actor_id}/movie_credits?api_key=${api_key}&&query=your&language=en-US`)
            .then(res => {
                const movies = res.data.cast;
                this.setState({ movies });
            })
        }

        //if this component will be rendered to the search result page, execute this code
        if(this.props.type === "search") {
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchTitle}&language=en-US&page=${page}&include_adult=false`)
            .then(res => {
                const movies = res.data.results;
                this.setState({ 
                    movies: movies,
                    totalPages : res.data.total_pages,
                    activePage: page,
                    searchTitle: searchTitle
                });
            })
        }
    }
    
    render() {

        let movieList = [];

        //if this component has count props, execute this code to limit the number of movies that will be showed
        if(this.props.count) {
            movieList = this.state.movies.slice(0, parseInt(this.props.count))
        } else {
            movieList = this.state.movies
        }

        return (
            <div className="row">

                {/* The pagination component, will be rendered if this component will be rendered to the browse page */}
                {this.props.isBrowsePage &&
                    <MoviePagination activePage={this.state.activePage} searchTitle={this.state.searchTitle} totalPages={this.state.totalPages}></MoviePagination>
                }

                {/* The Movies sub component */}
                <ul className="movie-card-container list-unstyled col-12">
                    {movieList.map(movie => 
                        <li className="movie-card">
                            <Link to={ `/movies/${movie.id}` } title={movie.title}>
                                <div className="image-container">
                                    <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={`${movie.title} Poster`} />
                                </div>
                                <div className="movie-card--title">
                                    <p className="flex rating"><img src="/icons/star.svg" /> {movie.vote_average}</p>
                                    <p>{movie.title}</p>
                                </div>
                            </Link>
                        </li>
                    )}
                </ul>

                {/* The pagination component, will be rendered if this component will be rendered to the browse page */}
                {this.props.isBrowsePage &&
                    <MoviePagination activePage={this.state.activePage} searchTitle={this.state.searchTitle} totalPages={this.state.totalPages}></MoviePagination>
                }
                
            </div>
            
                
        )
    }
}

export default MovieCard;