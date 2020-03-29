//this component is to render the movie detail page of this application

import React, {Component} from 'react'; 
import MovieInfo from '../components/MovieInfo';
import MovieCasts from '../components/MovieCasts';

class MovieDetail extends Component {
    render() {
        return (
        <div className="container content no-pad">
            <MovieInfo movie_id="372058"/>
            <MovieCasts movie_id="372058" />
        </div>

        )
    }
}

export default MovieDetail;