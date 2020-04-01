//this component is to render the detail of information of a movie, such as title, description, and list of casts

import React, {Component} from 'react'; 
import axios from 'axios';

class MovieInfo extends Component {
    state = {
        movieInfos: {},
        movieCasts : [],
        movieVideoKey: ""
    }

    componentDidMount() {
        const movie_id = this.props.movie_id;
        const api_key= "f4405389d2c4c04e87e2a7b8edff703b";
        
        //get the movie info via AJAX with axios
        axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${api_key}&language=en-US`)
        .then(res => {
            const infos = res.data;
            this.setState({ movieInfos: infos  });
        })

        //get the movie video via AJAX with axios
        axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${api_key}&language=en-US`)
        .then(res => {
            let videos = res.data.results;
            videos = videos.filter(video => video.site == "YouTube");

            //if there is a Youtube video link, then set the movieVideoKey state
            if(videos.length > 0) {
                this.setState({ movieVideoKey: videos[0].key  });
            }
        })
        
    }

    render() {
        //convert the birthday date into the locale string
        let releaseDate = (new Date(this.state.movieInfos.release_date)).toLocaleDateString();
        return (
        <div className="movie-info">
            <div className="container">
                {/* render the YouTube video */}
                {this.state.movieVideoKey &&
                    <iframe className="trailer-video" width="100%" src={`https://www.youtube.com/embed/${this.state.movieVideoKey}`} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen frameBorder="0"></iframe>
                }
                 {/* render the YouTube video */}

                <section className="row section">
                        {/* Render the poster which hidden itself at mobile device when it has video for aesthetic purpose */}
                        {this.state.movieVideoKey &&
                        <div className="col-sm-3">
                            <img src={`https://image.tmdb.org/t/p/w300${this.state.movieInfos.poster_path}`} className="img-fluid d-none d-sm-block" />
                        </div>
                        }

                        {/* Render the poster for all devices it does not have a video for aesthetic purpose */}
                        {!this.state.movieVideoKey &&
                        <div className="col-sm-3">
                            <img src={`https://image.tmdb.org/t/p/w300${this.state.movieInfos.backdrop_path}`} className="img-fluid mb-2 d-block d-sm-none backdrop" alt={this.state.movieInfos.name}/>
                            <img src={`https://image.tmdb.org/t/p/w300${this.state.movieInfos.poster_path}`} className="img-fluid d-none d-sm-block" />
                        </div>

                        }
                    
                    <div className="col-sm-9">
                        
                        <div className="flex">
                            <h1 className="movie-info--title">{this.state.movieInfos.original_title}</h1>
                            <p className="flex rating">
                                <span className="icon">
                                    <img src="/icons/star.svg" />
                                </span> {this.state.movieInfos.vote_average}
                            </p>
                        </div>
                        <div className="flex my-2">
                            
                            <div className="runtime">
                                <p className="flex"><span className="icon"><img src="/icons/calendar.svg" /></span>{this.state.movieInfos.runtime} minutes</p>
                            </div>
                            <div className="release_date">
                                <p className="flex"><span className="icon"><img src="/icons/clock.svg" /></span>{releaseDate}</p>
                            </div>
                        </div>
                        <h2>Overview</h2>
                        <p>{this.state.movieInfos.overview}</p>
                    </div>
                </section>
            </div>
        </div>

        )
    }
}

export default MovieInfo;