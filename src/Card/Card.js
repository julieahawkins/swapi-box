import React from 'react';
import Button from '../Button/Button';
import './Card.css';

const Card = (props) => {
  let mappedResidents;
  if (props.type === 'planets') {
    mappedResidents = props.cardData.residents.map((resident, index) => {
      return (
        <li>{resident}</li>
      )
    })
  }
  return (
    <div className="Card">
      <Button name='*'/>
      <p>Name: {props.cardTitle}</p>
      {
        props.type === 'people' &&
          <div className='card-data-container'>
            <p>Species: {props.cardData.species.name}</p>
            <p>Language: {props.cardData.species.language}</p>
            <p>Homeworld: {props.cardData.homeworld.name}</p>
            <p>Population: {props.cardData.homeworld.population}</p>
          </div>
      }
      {
        props.type === 'planets' &&
          <div className='card-data-container'>
            <p>Terrain: {props.cardData.terrain}</p>
            <p>Climate: {props.cardData.climate}</p>
            <p>Population: {props.cardData.population}</p>
            <ul>
              {
                mappedResidents
              }
            </ul>
          </div>
      }
      {

      }
    </div>  
  )
}

export default Card;