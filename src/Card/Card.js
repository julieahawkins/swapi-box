import React from 'react';
import Button from '../Button/Button';
import './Card.css';

const Card = (props) => {
  console.log(props)
  return (
    <div className="Card">
      <Button name='*'/>
      <p>Name: {props.charName}</p>
      <p>Homeworld: {props.data.homeworld.name}</p>
      <p>Species</p>
      <p>Population of Homeworld</p>
    </div>
  )
}

export default Card;