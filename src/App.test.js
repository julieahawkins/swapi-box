import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App test', () => {
  it.skip('should render correctly', () => {
    const renderedApp = shallow(<App />);

    expect(renderedApp.find('.App').length).toEqual(1);
  });
});
