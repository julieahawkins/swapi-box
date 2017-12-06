import React from 'react';
import Button from '../Button/Button';
// import './Card.css';

const Card = () => {
  return (
    <div className="card">
      <Button name='*'/>
      <p>Name: </p>
      <p>Homeworld</p>
      <p>Species</p>
      <p>Population of Homeworld</p>
    </div>
  )
}

export default Card;