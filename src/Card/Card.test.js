import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card test', () => {
  it('should render correctly', () => {
    const renderedCard = shallow(<Card card={{info: {fav: false}}}/>);

    expect(renderedCard.find('.Card').length).toEqual(1);
    expect(renderedCard.find('span').length).toEqual(4);
  });
});
