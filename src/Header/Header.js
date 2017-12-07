import React from 'react';
import Button from '../Button/Button';
import './Header.css';

const Header = (props) => {
  return (
    <div className='Header'>
      <h1>Swapi Box</h1>
      <Button name='Favorites'
              displayCards={props.displayCards}/>
    </div>
  )
}

export default Header;