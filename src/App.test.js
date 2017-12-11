import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

//default state and renders
//clicks change state with function calls
//state changes cause render changes

describe('App test', () => {
  it('should render correctly', () => {
    const renderedApp = shallow(<App />);

    expect(renderedApp.find('.App').length).toEqual(1);
  });


});
