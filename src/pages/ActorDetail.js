//this component is to render the movie detail page of this application

import React, {Component} from 'react'; 
import ActorInfo from '../components/ActorInfo';
import MovieCard from '../components/MovieCard';
import {Helmet} from "react-helmet";

class ActorDetail extends Component {
    render() {
        const { castSlug } = this.props.match.params

        return (
            <div className="actor-detail">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>CouchPotato - Actor Page</title>
                </Helmet>
                <div className="container content no-pad">
                    <div>
                        <ActorInfo actor_id={`${castSlug}`} />
                    </div>
                    <div>
                        <h3>Movieography</h3>
                        <MovieCard count="5" actor_id={`${castSlug}`}/>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default ActorDetail;