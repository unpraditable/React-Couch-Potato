//this component is to render the movie detail page of this application

import React, {Component} from 'react'; 
import ActorInfo from '../components/ActorInfo';
import MovieCard from '../components/MovieCard';

class ActorDetail extends Component {
    render() {
        return (
            <div className="container content no-pad">
                <div className="section">
                    <ActorInfo actor_id="119143" />
                </div>
                <div className="section">
                    <h2>Movieography</h2>
                    <MovieCard count="5" actor_id="119143"/>
                </div>
            </div>
        )
    }
}

export default ActorDetail;