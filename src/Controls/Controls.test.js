import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Controls from './Controls';

describe('Controls test', () => {
  it('should render correctly', () => {
    const renderedControls = shallow(<Controls />);

    expect(renderedControls.find('.Controls').length).toEqual(1);
  })
})
