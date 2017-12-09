import React from 'react';
import { shallow, mount } from 'enzyme';
import Controls from './Controls';

describe('Controls test', () => {
  let renderedControls;
  let mockDisplayCards;

  beforeEach(() => {
    mockDisplayCards = jest.fn();

    renderedControls = shallow(<Controls 
                                displaying={'People'}
                                displayCards={mockDisplayCards}/>);

  })
  it('should render correctly', () => {
    expect(renderedControls.find('.Controls').length).toEqual(1);
  });

  it('should render 3 Buttons', () => {
    expect(renderedControls.find('Button').length).toEqual(3);
  })

  it('should pass props down to the buttons', () => {
    const expectedProps = {
      displayCards: mockDisplayCards,
      displaying: 'People',
      name: 'People'
    }
    expect(renderedControls.find('Button').first().props()).toEqual(expectedProps)
  })
});
