import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Home from './pages/Home.js';
import Header from './components/Header.js';
import MovieDetail from './pages/MovieDetail';
import ActorDetail from './pages/ActorDetail';

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
          <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/movies/:movieSlug" component={MovieDetail}>
              </Route>
              <Route path="/casts/:castSlug" component={ActorDetail}>
              </Route>
            </Switch>
            {/* <MovieDetail /> */}
            {/* <ActorDetail /> */}
        </div>
      </div>
    </Router>
    
  );
}

export default App;
