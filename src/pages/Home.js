import React, {Component} from 'react'; 
import MovieCard from '../components/MovieCard';
class Home extends Component {
    render() {
        return (
        <div className="col-12 content no-pad">
            <h1>Hello World!</h1>
            <MovieCard />
        </div>

        )
    }
}

export default Home;