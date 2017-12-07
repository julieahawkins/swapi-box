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
      displaying: null,
      people: [],
      planets: []
      // vehicles:
    }
  }

  async componentDidMount() {
    const currentFilm = await this.fetchFilm();
    const people = await this.fetchPeople();
    const planets = await this.fetchPlanets();
    // const vehicles =
    this.setState( {currentFilm, people, planets} );
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

    return await this.fetchPeopleData(peopleArray.results);
  }

  fetchPeopleData(peopleArray) {
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
    });

    return Promise.all(unresolvedPromises)
  }

  async fetchPlanets() {
    const fetchedData = await fetch(`https://swapi.co/api/planets/`);
    const planetArray = await fetchedData.json();

    return await this.fetchPlanetData(planetArray.results);
  }

  fetchPlanetData(planetArray) {
    const unresolvedPromises = planetArray.map(async(planet) => {
      let residentArray = planet.residents.map(async(resident) => {
        let residentFetch = await fetch(resident);
        let residentData = await residentFetch.json();
        return residentData.name
      });

      let residentsData = await Promise.all(residentArray);

      return {
        name: planet.name,
        data: {
          terrain: planet.terrain,
          climate: planet.climate,
          population: planet.population,
          residents: residentsData
        }
      }
    });

    return Promise.all(unresolvedPromises);
  }

  displayCards = (type) => {
    this.setState( {displaying: type.toLowerCase()} )
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Controls  
            displaying={this.state.displaying} 
            displayCards={this.displayCards} />
        {
          this.state.currentFilm &&
          <Scroll currentFilm={this.state.currentFilm} />
        }
        {
          this.state.people.length > 0 &&
          <CardContainer 
            displaying={this.state.displaying}
            cards={this.state[this.state.displaying]} />
        }
      </div>
    );
  }
}

export default App;
