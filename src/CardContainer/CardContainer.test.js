import React from 'react';
import { shallow } from 'enzyme';
import CardContainer from './CardContainer';

describe('CardContainer test', () => {
  it('should render correctly', () => {
    const renderedCardContainer = shallow(<CardContainer />);

    expect(renderedCardContainer.find('.CardContainer').length).toEqual(1);
  });
});
