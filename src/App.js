import React, { Component } from 'react';
import Header from './Header/Header';
import Controls from './Controls/Controls';
import Scroll from './Scroll/Scroll';
import CardContainer from './CardContainer/CardContainer';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentFilm: {},
      // people:
      // planets:
      // vehicles:
    }
  }

  async componentDidMount() {
    const randomFilm = Math.floor(Math.random() * 7) + 1;
    const fetchedData = await fetch(`https://swapi.co/api/films/${randomFilm}/`);
    const data = await fetchedData.json();

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
        <Controls />
        <Scroll currentFilm={this.state.currentFilm}/>
        <CardContainer />
      </div>
    );
  }
}

export default App;
