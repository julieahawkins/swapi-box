import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button test', () => {
  it('should render correctly', () => {
    const renderedButton = shallow(<Button name={'Hoth'}/>);

    expect(renderedButton.find('.Button').length).toEqual(1);
  });
});
