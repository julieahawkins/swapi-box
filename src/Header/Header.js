import React from 'react';
import Button from '../Button/Button';
import PropTypes from 'prop-types'; 
import './Header.css';

const Header = (props) => {
  return (
    <div className='Header'>
      <h1>Swapi Box</h1>
      <div className='favorite-wrapper'>
        <span className='favNum'>{props.favNum}</span>
        <Button 
          name='Favorites'
          displaying={props.displaying}
          displayCards={props.displayCards}/>
      </div>
    </div>
  );
};

Header.propTypes = {
  favNum: PropTypes.number,
  displaying: PropTypes.string,
  displayCards: PropTypes.func
};

export default Header;