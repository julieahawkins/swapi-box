import React from 'react';
import { shallow } from 'enzyme';
import Scroll from './Scroll';

describe('Scroll test', () => {
  it('should render correctly', () => {
    const renderedScroll = shallow(<Scroll currentFilm={{}}/>);
    expect(renderedScroll.find('.scroll-container').length).toEqual(1);
  });

  it('should not render the scroll-text if the prop has not been passed', () => {
    let renderedScroll = shallow(<Scroll currentFilm={{}}/>);

    expect(renderedScroll.find('.scroll-container').length).toEqual(1);
    expect(renderedScroll.find('.Scroll').length).toEqual(0);

    renderedScroll = shallow(<Scroll currentFilm={{title: 'A New Hope', crawlText: 'the crawl text from the beginning of A New Hope..'}}/>);

    expect(renderedScroll.find('.Scroll').length).toEqual(1);
  });

  it('should render intro text', () => {
    const renderedScroll = shallow(<Scroll currentFilm={{title: 'A New Hope', crawlText: 'the crawl text from the beginning of A New Hope..'}}/>);
    
    expect(renderedScroll.find('.intro').text()).toEqual('A long time ago in a galaxy far, far away....')
  });
});
