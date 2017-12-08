import React from 'react';
import { shallow } from 'enzyme';
import Controls from './Controls';

describe('Controls test', () => {
  it('should render correctly', () => {
    const renderedControls = shallow(<Controls />);

    expect(renderedControls.find('.Controls').length).toEqual(1);
  });
});
