import React from 'react';
import Button from '../Button/Button';
import './Header.css';

const Header = () => {
  return (
    <div className='Header'>
      <h1>Swapi Box</h1>
      <Button name='Favorites'/>
    </div>
  )
}

export default Header;