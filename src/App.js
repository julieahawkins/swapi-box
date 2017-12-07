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
      planets: [],
      vehicles: [],
      favorites: []
    }
  }

  async componentDidMount() {
    const currentFilm = await this.fetchFilm();
    const people = await this.fetchPeople();
    const planets = await this.fetchPlanets();
    const vehicles = await this.fetchVehicles();
    this.setState( {currentFilm, people, planets, vehicles} );
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
        type: 'people', 
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
        type: 'planets',
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

  async fetchVehicles() {
    const fetchedData = await fetch('https://swapi.co/api/vehicles/');
    const vehiclesArray = await fetchedData.json();

    return vehiclesArray.results.map(vehicle => {
      return {
        name: vehicle.name,
        type: 'vehicles',
        data: {
          model: vehicle.model,
          class: vehicle.vehicle_class,
          passengers: vehicle.passengers
        }
      }
    })
  }

  updateFavorites = (card) => {
    const favorites = [...this.state.favorites, card];

    this.setState( {favorites} );
  }
  
  displayCards = (type) => {
    const displaying = type.toLowerCase();
    
    this.setState( {displaying} );
  }

  render() {
    return (
      <div className="App">
        <Header displayCards={this.displayCards}
                displaying={this.state.displaying} />
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
            updateFavorites={this.updateFavorites}
            displaying={this.state.displaying}
            cards={this.state[this.state.displaying]} />
        }
      </div>
    );
  }
}

export default App;
