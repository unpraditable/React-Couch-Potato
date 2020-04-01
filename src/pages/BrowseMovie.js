//this page is for browse movie page, like for Top Movies and Popular Movies, also Search Results Page. Renders Movie Card Page and paginations

import React, {Component} from 'react'; 
import MovieCard from '../components/MovieCard';
class ActorDetail extends Component {
    
    render() {
        //these variables below is to render the title of the page. Whether to render Top Movies page, Popular page, or Search Result Page
        let pageTitle = "";

        //set the title to "Top" if type="top_rated"
        if(this.props.type === "top_rated") {
            pageTitle = "Top"
        }

        //set the title to "Popular" if type="popular"
        if(this.props.type === "popular") {
            pageTitle = "Popular"
        }

        //variables to parse query string from URL into a proper object
        const queryString = require('query-string');
        const parsedQueryString = queryString.parse(window.location.search);

        //searchTitle is the title parameter in the search query on URL
        const searchTitle = parsedQueryString.title;

        return (
            <div className="container">
                {this.props.type !== "search" &&
                    <h1>{pageTitle} Movies</h1>
                }
                {this.props.type === "search" &&
                    <h1> Search Results For "{searchTitle}"</h1>
                }
                <MovieCard type={this.props.type} isBrowsePage="true" searchTitle="" />    
            </div>
            
        )
    }
}

export default ActorDetail;