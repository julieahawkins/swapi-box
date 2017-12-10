import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './Header';

describe('Header test', () => {
  let renderedHeader;
  
  beforeEach(() => {
    renderedHeader = shallow(<Header />);
  });

  it('should render correctly', () => {
    expect(renderedHeader.find('.Header').length).toEqual(1);
  });

  it('should display the title SWapi BoX', () => {
    expect(renderedHeader.find('h1').text()).toEqual('Swapi Box');
  });

  it('should render a favorites Button', () => {
    renderedHeader = mount(<Header />);

    expect(renderedHeader.find('Button').length).toEqual(1);
    expect(renderedHeader.find('Button').text()).toBe('Favorites');
  });

  it('should pass the correct props to the Favorites Button', () => {
    const mockDisplayCards = jest.fn();
    renderedHeader = mount(
      <Header 
        displayCards={mockDisplayCards}
        displaying={'Favorites'}/>
    );
    const expectedButtonProps = {
      name: 'Favorites',
      displaying: 'Favorites',
      displayCards: mockDisplayCards
    };

    expect(renderedHeader.find('Button').props()).toEqual(expectedButtonProps);
  });
});
