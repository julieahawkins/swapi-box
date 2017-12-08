import React from 'react';
import { shallow } from 'enzyme';
import Scroll from './Scroll';

describe('Scroll test', () => {
  it('should render correctly', () => {
    const renderedScroll = shallow(<Scroll currentFilm={{}}/>);

    expect(renderedScroll.find('.Scroll').length).toEqual(1);
  });
});
