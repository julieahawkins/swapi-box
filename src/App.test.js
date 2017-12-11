import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import mockData from './mockData';


//default state and renders
//clicks change state with function calls
//state changes cause render changes

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
    
  })
  it('should render correctly', () => {

    expect(renderedApp.find('.App').length).toEqual(1);
    expect(renderedApp.find('Header').length).toEqual(1);
    expect(renderedApp.find('Controls').length).toEqual(1);
    expect(renderedApp.find('Scroll').length).toEqual(1);
    expect(renderedApp.find('CardContainer').length).toEqual(1);
  });

  it('should render an error if the errorStatus is true', () => {
    renderedApp.setState({errorStatus: true})
    expect(renderedApp.find('h1').first().text()).toEqual('Error: Data Not Found');
  
  });

  it('should have a match the default state', () => {
    
    expect(renderedApp.state()).toEqual(expectedDefaultState);
  });

  it('should be fetch data and setState to match pulled data', ()=> {
    const { mockState } = mockData;

    renderedApp.setState(mockState)

    expect(renderedApp.state('people').length).toEqual(10);
    expect(renderedApp.state('planets').length).toEqual(10);
    expect(renderedApp.state('vehicles').length).toEqual(10);
    expect(renderedApp.state('favorites').length).toEqual(0);
    expect(renderedApp.state('currentFilm')).toEqual({title: 'A New Hope'});
    expect(renderedApp.state('displaying')).toEqual(null);
    expect(renderedApp.state('errorStatus')).toEqual(false);
  });

  it.skip('should add a card to favorites array when a card button is clicked', () => {
    // renderedApp = mount(<App />);
    // const cardButton = renderedApp.find('CardContainer');
    // console.log(cardButton)

  });


});
