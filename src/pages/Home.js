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
            <Helmet>
                <meta charSet="utf-8" />
                <title>CouchPotato - Browse for Your Favourite Movies Here!</title>
            </Helmet>
            <MovieSlider type="popular" count="5"/>
            <div className="container content no-pad">
                <h1 className="home-title">CouchPotato - Browse for Your Favourite Movies Here!</h1>
                <MovieCard type="top_rated" count="10"/>

                <h2>Popular Actor/Actress Today</h2>
                <MovieCasts count="10"/>

            </div>
        </div>
        

        )
    }
}

export default Home;