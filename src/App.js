import React, { Component } from 'react';
import Header from './Header/Header';
import Controls from './Controls/Controls';
import Scroll from './Scroll/Scroll';
import CardContainer from './CardContainer/CardContainer';
import { 
  fetchFilm, 
  fetchPeople, 
  fetchPlanets, 
  fetchVehicles 
} from './apiCalls';

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
    };
  }

  async componentDidMount() {
    const currentFilm = await fetchFilm();
    const people = await fetchPeople();
    const planets = await fetchPlanets();
    const vehicles = await fetchVehicles();
    this.setState( {currentFilm, people, planets, vehicles} );
  }
  
  updateFavorites = (type, card) => {
    card.info.fav = !card.info.fav;
    
    let favorites = this.state.favorites;
    const favCard = favorites.find(fav => fav.name === card.name);

    favorites = !favCard 
      ? [...this.state.favorites, card] 
      : favorites.filter(fav => fav.name !== card.name);
    
    this.setState( {favorites} );
  }
  
  displayCards = (type, card) => {
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
