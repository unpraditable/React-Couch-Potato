//this component is to render the homepage of this application

import React, {Component} from 'react'; 
import MovieCard from '../components/MovieCard';
import MovieCasts from '../components/MovieCasts';

import MovieSlider from '../components/MovieSlider';
import {Helmet} from "react-helmet";

class Home extends Component {
    render() {
        return (
        <div className ="home-container">
            {/* Show The Title of The Page */}
            <Helmet>
                <meta charSet="utf-8" />
                <title>CouchPotato - Browse for Your Favourite Movies Here!</title>
            </Helmet>
            {/* Show The Slider */}
            <MovieSlider type="popular" count="5"/>
            <div className="container content no-pad">
                <h1 className="home-title">CouchPotato - Browse for Your Favourite Movies Here!</h1>

                {/* Show 10 Top Rated Movies */}
                <MovieCard type="top_rated" count="10"/>

                {/* Show 10 Popular Actors */}
                <h2>Popular Actor/Actress Today</h2>
                <MovieCasts count="10"/>

            </div>
        </div>
        

        )
    }
}

export default Home;