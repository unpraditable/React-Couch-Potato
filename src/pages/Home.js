import React, {Component} from 'react'; 
import MovieCard from '../components/MovieCard';
class Home extends Component {
    render() {
        return (
        <div className="container content no-pad">
            <h1>Hello World!</h1>

            <h2>Top Movies</h2>
            <MovieCard type="top_rated" count="5"/>

            <h2>Popular Movies</h2>
            <MovieCard type="popular" count="5"/>
        </div>

        )
    }
}

export default Home;