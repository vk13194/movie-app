import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import MovieResults from './components/MovieResults'
function App() {
  return (
    <div className="App">
      <div className="jumbotron jumbotron-fluid">
     <div className="container">
    <h1 className="display-4">Movies App</h1>
    </div>
     </div>
     <div className="Row">
     <MovieResults />
     </div>
    </div>
  );
}

export default App;
