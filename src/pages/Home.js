//this component is to render the homepage of this application

import React, {Component} from 'react'; 
import MovieCard from '../components/MovieCard';

import MovieSlider from '../components/MovieSlider';
class Home extends Component {
    render() {
        return (
        <div className ="home-container">
            <MovieSlider type="popular" count="5"/>
            <div className="container content no-pad">
                <h1 className="home-title">CouchPotato - Browse for Your Favourite Movies Here!</h1>
                <MovieCard type="top_rated" count="10"/>
            </div>
        </div>
        

        )
    }
}

export default Home;