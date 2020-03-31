//this is a component to render movie cards in a list of movie, whether it is top_rated or popular movie

import React, {Component} from 'react'; 
import axios from 'axios';
import Pagination from 'react-bootstrap/Pagination';

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
        axios.get(`https://api.themoviedb.org/3/person/${actor_id}/movie_credits?api_key=${api_key}&&query=your&language=en-US`)
        .then(res => {
            const movies = res.data.cast;
            this.setState({ movies });
        })

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

        //this is an algorithm to append the pagination
        var active = parseInt(this.state.activePage); //active is the active page of the pagination
        var last = parseInt(this.state.totalPages);
        var delta = 3; //delta is the range between active pagination with the first pagination and last pagination
        var left = active - delta; // left is the index of items which on the left side of active
        var right = active + delta + 1; //right is the index of 3 items which on the right side of active
        var items = []; //items is the pagination items that will be rendered

        if(last > 1) {
            for (let i = 1; i <= last; i++) {
                //append the pagination item at first, last, active page, 3 on the left of active and 3 on the right of active
                if (i === 1 || i === last || i >= left && i < right) {
                    if(this.state.searchTitle) {
                        items.push(
                            <Pagination.Item key={i} active={i === active} href={`?title=${this.state.searchTitle}&page=${i}`}>{i}</Pagination.Item> 
                        );
                    } else {
                        items.push(
                            <Pagination.Item key={i} active={i === active} href={`?page=${i}`}>{i}</Pagination.Item> 
                        );
                    }
                    
                }
                //append the ellipsis pagination on the second item and second last item if active < left or active >= left
                if(i === 2 && i < left|| i === last - 1 && i >= right) {
                    items.push(<Pagination.Ellipsis />)
    
                }
            }
        }

        return (
            <div class="col-12">

                {/* The Movies sub component */}
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

                {/* The pagination component, will be rendered if this component will be rendered to the browse page */}
                {this.props.isBrowsePage &&
                    <Pagination>{items}</Pagination>
                }
                
            </div>
            
                
        )
    }
}

export default MovieCard;