import React from 'react';
import { shallow } from 'enzyme';
import CardContainer from './CardContainer';

describe('CardContainer test', () => {
  let renderedCardContainer;

  beforeEach(() => {
    renderedCardContainer = shallow(<CardContainer 
                                      cards={[]}
                                      displaying={null} />);
  })

  it('should render correctly', () => {

    expect(renderedCardContainer.find('.CardContainer').length).toEqual(1);
  });

  it('should render a choose category message if nothing has been selected to display', () => {
    expect(renderedCardContainer.find('h1').text()).toEqual('Choose a Category');
  })

  it('should render 3 cards if passed an array whose length is 3', () => {
    const mockCards = [
      { name: 'Luke Skywalker', info: {cardFav: false} },
      { name: 'R2-D2', info: {cardFav: false} },
      { name: 'Darth Vader', info: {cardFav: false} }
    ];

    renderedCardContainer = shallow(<CardContainer 
                                      cards={mockCards} 
                                      displaying={'people'}/>);

    expect(renderedCardContainer.find('h1').length).toEqual(0);
    expect(renderedCardContainer.find('Card').length).toEqual(3);
  })

  it('should render a no favorites message if the props displaying === favorites and there are no favorited cards', () => {
    renderedCardContainer = shallow(<CardContainer 
                                      cards={[]} 
                                      displaying={'favorites'}/>);
    expect(renderedCardContainer.find('h1').text()).toEqual('You have no favorites... COLLECT SOME!')
  })
});
