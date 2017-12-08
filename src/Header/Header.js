import React from 'react';
import Button from '../Button/Button';
import PropTypes from 'prop-types'; 
import './Header.css';

const Header = (props) => {
  return (
    <div className='Header'>
      <h1>Swapi Box</h1>
      <Button 
        name='Favorites'
        displaying={props.displaying}
        displayCards={props.displayCards}/>
    </div>
  );
};

Header.propTypes = {
  displaying: PropTypes.string,
  displayCards: PropTypes.func
};

export default Header;