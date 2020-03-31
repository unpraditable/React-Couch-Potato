//this page is for browse movie page, like for Top Movies and Popular Movies, also Search Results Page. Renders Movie Card Page and paginations

import React, {Component} from 'react'; 
import MovieCard from '../components/MovieCard';

class ActorDetail extends Component {
    render() {

        return (
            <div className="container">
                <MovieCard type={this.props.type} />
            </div>
        )
    }
}

export default ActorDetail;