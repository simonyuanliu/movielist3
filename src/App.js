import React, { Component } from 'react';
import './App.css';
import MovieList from './movieList';
import movies from './movieData';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div>
          <input type = "text" value ="" className = 'search'></input><button className = 'searchButton'>Go</button>
        </div>
         <h1>MovieList</h1>
        </header>
        <div className="listDiv">
          < MovieList list ={movies}/>
        </div>
      </div>
    );
  }
}

export default App;
