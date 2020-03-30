import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Home from './pages/Home.js'
import MovieDetail from './pages/MovieDetail';
import ActorDetail from './pages/ActorDetail';

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <MovieDetail /> */}
      <ActorDetail />
    </div>
  );
}

export default App;
