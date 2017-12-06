import React, { Component } from 'react';
import Header from './Header/Header';
import Button from './Button/Button';
import Scroll from './Scroll/Scroll';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentFilm: {}
    }
  }

  async componentDidMount() {
    const randomFilm = Math.floor(Math.random() * 7) + 1;
    const fetchedData = await fetch(`https://swapi.co/api/films/${randomFilm}/`);
    const data = await fetchedData.json();
    console.log(data)
    const currentFilm = {
      title: data.title.toUpperCase(),
      crawlText: data.opening_crawl, 
      episodeNum: data.episode_id, 
      releaseDate: data.release_date
    };
    this.setState( {currentFilm} );
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Button />
        <Scroll currentFilm={this.state.currentFilm}/>
      </div>
    );
  }
}

export default App;
