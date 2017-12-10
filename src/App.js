import React, { Component } from 'react';
import Header from './Header/Header';
import Controls from './Controls/Controls';
import Scroll from './Scroll/Scroll';
import CardContainer from './CardContainer/CardContainer';
import { fetchAPI } from './apiCalls';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentFilm: {},
      displaying: null,
      people: [],
      planets: [],
      vehicles: [],
      favorites: [],
      errorStatus: false
    };

    this.randomFilm = Math.floor(Math.random() * 7) + 1;
    this.apiCalls = {
      film: `https://swapi.co/api/films/${this.randomFilm}/`,
      people: 'https://swapi.co/api/people/',
      planets: 'https://swapi.co/api/planets/',
      vehicles: 'https://swapi.co/api/vehicles/'
    };
  }

  async componentDidMount() {
    try {
      const currentFilm = await fetchAPI('film', this.apiCalls.film);
      const people = await fetchAPI('people', this.apiCalls.people);
      const planets = await fetchAPI('planets', this.apiCalls.planets);
      const vehicles = await fetchAPI('vehicles', this.apiCalls.vehicles);

      this.setState( {currentFilm, people, planets, vehicles} );
    } catch (error) {
      this.setState( {errorStatus: true} );
    }
  }
  
  updateFavorites = (type, card) => {
    let favorites = this.state.favorites;
    const favCard = favorites.find(fav => fav.name === card.name);

    this.toggleFav(card);

    favorites = !favCard 
      ? [...favorites, card] 
      : favorites.filter(fav => fav.name !== card.name);
    
    this.setState( {favorites} );
  }

  toggleFav = (card) => {
    card.info.fav = !card.info.fav; 
  }
  
  displayCards = (type) => {
    const displaying = type.toLowerCase();
    
    this.setState( {displaying} );
  }

  render() {
    return (
      <div className="App">
        <Header 
          displayCards={this.displayCards}
          displaying={this.state.displaying} />
        <Controls  
          displaying={this.state.displaying} 
          displayCards={this.displayCards} /> 
        {
          this.state.errorStatus &&
          <h1>Error: Not Found</h1>
        }      
        <Scroll currentFilm={this.state.currentFilm} />    
        <CardContainer 
          updateFavorites={this.updateFavorites}
          displaying={this.state.displaying}
          cards={this.state[this.state.displaying]} />     
      </div>
    );
  }
}

export default App;
