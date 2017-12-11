import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card test', () => {
  let renderedCard;
  beforeEach(() => {
    renderedCard = shallow(
      <Card card={{info: {
        model: 'All Terrain Armored Transport', 
        class: 'assault walker', 
        passengers: 40
      }}}/>
    );
  });

  it('should render correctly', () => {
    expect(renderedCard.find('.Card').length).toEqual(1);
    expect(renderedCard.find('Button').length).toEqual(1);
  });

  it('should render a span for each piece of card data', () => {
    expect(renderedCard.find('span').length).toEqual(3);
  });

  it('should render a span for each piece of card data', () => {
    const span = renderedCard.find('span').first();
    expect(span.text()).toEqual('model: All Terrain Armored Transport');
  })
});
