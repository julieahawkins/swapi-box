import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Button from './Button';

describe('Button test', () => {
  it('should render correctly', () => {
    const renderedButton = shallow(<Button name={'Hoth'}/>);

    expect(renderedButton.find('.Button').length).toEqual(1);
  })
})
