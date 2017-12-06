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
      people: []
      // planets:
      // vehicles:
    }
  }

  async componentDidMount() {
    const currentFilm = await this.fetchFilm();
    const people = await this.fetchPeople();
    // const planets = 
    // const vehicles =
    // console.log(people)
    this.setState( {currentFilm, people} );
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
    const fetchedData = await fetch(`https://swapi.co/api/people/`);
    const peopleArray = await fetchedData.json();
    // console.log(peopleArray.results)
    return await this.fetchPeopleData(peopleArray.results);
    // console.log(people);
  }

  fetchPeopleData(peopleArray) {
    // console.log(peopleArray)
    const unresolvedPromises = peopleArray.map(async(person) => {
      let homeworldFetch = await fetch(person.homeworld);
      let homeworldData = await homeworldFetch.json();

      let speciesFetch = await fetch(person.species);
      let speciesData = await speciesFetch.json();

      return {
        name: person.name, 
        data: {
          homeworld: homeworldData, 
          species: speciesData
        }
      }
    })
    return Promise.all(unresolvedPromises)
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Controls />
        {
          this.state.currentFilm &&
          <Scroll currentFilm={this.state.currentFilm}/>
        }
        <CardContainer people={this.state.people} />
      </div>
    );
  }
}

export default App;
