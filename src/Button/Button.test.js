import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button test', () => {
  let mockDisplayCards;
  let mockUpdateFavorites;
  let renderedButton;

  beforeEach(() => {
    mockDisplayCards = jest.fn();
    mockUpdateFavorites = jest.fn();

    renderedButton = shallow(
      <Button 
        name={'People'}
        displaying={'people'}
        displayCards={mockDisplayCards} />
    );
  });

  it('should render a button with the class of Button', () => {

    expect(renderedButton.find('button').length).toEqual(1);
    expect(renderedButton.find('.Button').length).toEqual(1);
  });

  it('should call the correct func with the correct props in Controls', () => {

    renderedButton.find('button').simulate('click');

    expect(mockDisplayCards).toHaveBeenCalled();
    expect(mockDisplayCards.mock.calls.length).toEqual(1);
  });

  it('should call the correct func with the correct props in Card', () => {
    renderedButton = shallow(
      <Button 
        name={''}
        updateFavorites={mockUpdateFavorites} />
    );

    renderedButton.find('button').simulate('click');

    expect(mockUpdateFavorites).toHaveBeenCalled();
    expect(mockUpdateFavorites.mock.calls.length).toEqual(1);
  });

  it('should have a className of "selected" if is selected', () => {

    expect(renderedButton.is('.selected')).toEqual(true);
  });

  it('should have a className of "favorite" if is on a favorited Card', () => {
    renderedButton = shallow(
      <Button 
        name={''}
        cardFav={true}
        updateFavorites={mockUpdateFavorites} />
    );

    expect(renderedButton.is('.favorite')).toEqual(true);
  });
});
