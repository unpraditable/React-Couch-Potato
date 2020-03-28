import React, {Component} from 'react'; 
import MovieCard from '../components/MovieCard';
class Home extends Component {
    render() {
        return (
        <div className="container content no-pad">
            <h1>Hello World!</h1>
            <MovieCard />
        </div>

        )
    }
}

export default Home;