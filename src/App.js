import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Home from './pages/Home.js';
import Header from './components/Header.js';
import MovieDetail from './pages/MovieDetail';
import ActorDetail from './pages/ActorDetail';
import MovieCard from './components/MovieCard';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  return (
    <Router basename="/">
      <div className="App">
        <Header />
        <div className="App-body">

          {/* I use normal routing here */}
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/popular">
            <div className="container">
              <MovieCard type="top_rated"/>
            </div>
          </Route>
          <Route exact path="/trending">
            <div className="container">
              <MovieCard type="popular"/>
            </div>
          </Route>

          {/* I use switch for nested routes, so those components will be rendered inclusively and it will be helpful for nested URLs */}
          <Switch>
            <Route path="/movies/:movieSlug" component= {MovieDetail}>
            </Route>
            <Route path="/casts/:castSlug" component={ActorDetail}>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
