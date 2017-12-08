import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Scroll from './Scroll';

describe('Scroll test', () => {
  it('should render correctly', () => {
    const renderedScroll = shallow(<Scroll currentFilm={{}}/>);

    expect(renderedScroll.find('.Scroll').length).toEqual(1);
  })
})
