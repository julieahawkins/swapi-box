import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button test', () => {
  it('should render a button with the class of Button', () => {
    const mockFunc = jest.fn();
    const renderedButton = shallow(<Button 
      name={'Hoth'} onClick={mockFunc}/>);

    expect(renderedButton.find('button').length).toEqual(1);
    expect(renderedButton.find('.Button').length).toEqual(1);
  });
});
