import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import mockData from './apiCalls/mockData';

describe('App test', () => {
  let renderedApp;
  let expectedDefaultState;

  beforeEach(() => {
    renderedApp = shallow(<App />);

    expectedDefaultState = {
      currentFilm: {}, 
      displaying: null, 
      errorStatus: false, 
      favorites: [], 
      people: [], 
      planets: [], 
      vehicles: []
    }; 
  });

  it('should render correctly', () => {

    expect(renderedApp.find('.App').length).toEqual(1);
    expect(renderedApp.find('Header').length).toEqual(1);
    expect(renderedApp.find('Controls').length).toEqual(1);
    expect(renderedApp.find('Scroll').length).toEqual(1);
    expect(renderedApp.find('CardContainer').length).toEqual(1);
  });

  it('should render an error if the errorStatus is true', () => {
    renderedApp.setState({errorStatus: true});
    const h1 = renderedApp.find('h1').first();
    expect(h1.text()).toEqual('Error: Data Not Found');
   
  });

  it('should have a match the default state', () => {
    
    expect(renderedApp.state()).toEqual(expectedDefaultState);
  });

  it('should be fetch data and setState to match pulled data', ()=> {
    const { mockState } = mockData;

    renderedApp.setState(mockState);

    expect(renderedApp.state('people').length).toEqual(10);
    expect(renderedApp.state('planets').length).toEqual(10);
    expect(renderedApp.state('vehicles').length).toEqual(10);
    expect(renderedApp.state('favorites').length).toEqual(0);
    expect(renderedApp.state('currentFilm')).toEqual({title: 'A New Hope'});
    expect(renderedApp.state('displaying')).toEqual(null);
    expect(renderedApp.state('errorStatus')).toEqual(false);
  });

  it('should add a card to favs array when a card button is clicked', () => {
    const mockCard = {
      name: 'AT-AT',
      type: 'vehicles',
      fav: false,
      info: {
        model: 'All Terrain Armored Transport', 
        class: 'assault walker', 
        passengers: 40
      }
    };

    renderedApp.instance().updateFavorites('vehicles', mockCard);

    expect(renderedApp.state('favorites').length).toEqual(1);
    expect(renderedApp.state('favorites')[0]).toEqual(mockCard);
  });

  it('should remove a card from favs when same card button is clicked', () => {
    const mockCard = {
      name: 'AT-AT',
      type: 'vehicles',
      fav: false,
      info: {
        model: 'All Terrain Armored Transport', 
        class: 'assault walker', 
        passengers: 40
      }
    };

    renderedApp.instance().updateFavorites('vehicles', mockCard);

    expect(renderedApp.state('favorites').length).toEqual(1);

    renderedApp.instance().updateFavorites('vehicles', mockCard);
    
    expect(renderedApp.state('favorites').length).toEqual(0);
  });

  it('should display people cards when the people button is clicked', () => {
    const { mockState } = mockData;
    renderedApp.setState(mockState);

    expect(renderedApp.state('displaying')).toEqual(null);

    renderedApp.instance().displayCards('People');

    expect(renderedApp.state('displaying')).toEqual('people');
  });
});
