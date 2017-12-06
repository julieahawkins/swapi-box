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
    const currentFilm = await this.fetchFilm();
    // const people = await this.fetchPeople();
    // const planets = 
    // const vehicles =
    console.log(people)
    this.setState( {currentFilm} );
  }

  async fetchFilm() {
    const randomFilm = Math.floor(Math.random() * 7) + 1;
    const fetchedData = await fetch(`https://swapi.co/api/films/${randomFilm}/`);
    const filmData = await fetchedData.json();

    const currentFilm = {
      title: filmData.title.toUpperCase(),
      crawlText: filmData.opening_crawl, 
      episodeNum: filmData.episode_id, 
      releaseDate: filmData.release_date
    };

    return currentFilm
  }

  async fetchPeople() {
    debugger;
    const fetchedData = await fetch(`https://swapi.co/api/people/`);
    const peopleArray = await fetchedData.json();
    // const people = await this.fetchPeopleData(peopleArray);
  }

  // fetchPeopleData(peopleArray) {
  //   const unresolvedPromises = peopeArray.map(async(person) => {
  //     let personFetch = await fetch(person);
  //     let personData = await personFetch.json();
  //     // debugger;
  //     return personData
  //   })
  // }

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
