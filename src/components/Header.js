//this component is to render the header navigation of this application

import React, {Component} from 'react'; 
import {
    Link
  } from "react-router-dom";

class Header extends Component {

    render() {
        return (
        <header>
            <div className="container flex">
                <Link className="brand-name" to="/">CouchPotato</Link>
                <nav>
                    <Link to="/top_rated">Top Rated</Link>
                    <Link to="/popular">Popular</Link>
                    <input type="text" placeholder="Search.."></input>
                </nav>
            </div>
        </header>

        )
    }
}

export default Header;