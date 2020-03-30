import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Home from './pages/Home.js'
import MovieDetail from './pages/MovieDetail';
import ActorDetail from './pages/ActorDetail';

import {
  BrowserRouter as Router,
  Switch,
  HashRouter,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

function App() {

  return (
    <Router basename="/">
      <div className="App">
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
    </Router>
    
  );
}

export default App;
