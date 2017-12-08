import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Card from './Card';

describe('Card test', () => {
  it('should render correctly', () => {
    const renderedCard = shallow(<Card data={{}}/>);

    expect(renderedCard.find('.Card').length).toEqual(1);
  })
})
