//this component is to render the detail of information of a movie, such as title, description, and list of casts

import React, {Component} from 'react'; 
import axios from 'axios';

class MovieInfo extends Component {
    state = {
        movieInfos: {},
        movieCasts : []
    }

    componentDidMount() {
        const movie_id = this.props.movie_id;
        const api_key= "f4405389d2c4c04e87e2a7b8edff703b";
        
        //get the movie info via AJAX with axios
        axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${api_key}&language=en-US`)
            .then(res => {
                const infos = res.data;
                this.setState({ movieInfos: infos  });

                console.log(this.state.movieInfos)
            })
        
    }

    render() {
        return (
        <div>
            <h1>{this.state.movieInfos.original_title}</h1>

            <div className="backdrop">
                <img src={`https://image.tmdb.org/t/p/original${this.state.movieInfos.backdrop_path}`} className="img-fluid" />
            </div>


            <section className="row">
                <div className="col-sm-3">
                <img src={`https://image.tmdb.org/t/p/w300${this.state.movieInfos.poster_path}`} className="img-fluid" />

                </div>
                <div className="col-sm-9">
                <h2>Overview</h2>

                    <p>{this.state.movieInfos.overview}</p>
                </div>
            </section>
        </div>

        )
    }
}

export default MovieInfo;