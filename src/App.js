import React, { Component } from 'react';
import Header from './Header/Header';
import Button from './Button/Button';
import Scroll from './Scroll/Scroll';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      defaultScroll: {}
    }
  }

  async componentDidMount() {

    const randomFilm = Math.floor(Math.random() * 7) + 1;
    const fetchedData = await fetch(`https://swapi.co/api/films/${randomFilm}/`);
    const data = await fetchedData.json();
    console.log(data)
    const defaultScroll = {
      title: data.title,
      crawlText: data.opening_crawl, 
      episodeNum: data.episode_id, 
      releaseDate: data.release_date
    };
    this.setState( {defaultScroll} );
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Button />
        <Scroll defaultScroll={this.state.defaultScroll}/>
      </div>
    );
  }
}

export default App;
