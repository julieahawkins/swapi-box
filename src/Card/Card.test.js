import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card test', () => {
  it('should render correctly', () => {
    const renderedCard = shallow(<Card data={{}}/>);

    expect(renderedCard.find('.Card').length).toEqual(1);
  });
});
