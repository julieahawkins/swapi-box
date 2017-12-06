import React from 'react';
import Button from '../Button/Button';
import './Card.css';

const Card = (props) => {
  return (
    <div className="Card">
      <Button name='*'/>
      <p>Name: {props.charName}</p>
      <p>Homeworld: {props.data.homeworld.name}</p>
      <p>Species: {props.data.species.name}</p>
      <p>Language: {props.data.species.language}</p>
      <p>Population: {props.data.homeworld.population}</p>
    </div>
  )
}

export default Card;