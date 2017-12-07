import React from 'react';
import Button from '../Button/Button';
import './Card.css';

const Card = (props) => {
  let mappedResidents;
  if (props.type === 'planets') {
    mappedResidents = props.cardData.residents.map((resident, index) => {
      return (
        <li key={`li-${index}`}>{resident}</li>
      )
    })
  }
  return (
    <div className="Card">
      <Button name='*'
              id={props.cardTitle}
              updateFavorites={props.updateFavorites}/>
      <p>Name: {props.cardTitle}</p>
      {
        props.type === 'people' &&
          <div className={`${props.type}-cards-container`}>
            <p>Species: {props.cardData.species.name}</p>
            <p>Language: {props.cardData.species.language}</p>
            <p>Homeworld: {props.cardData.homeworld.name}</p>
            <p>Population: {props.cardData.homeworld.population}</p>
          </div>
      }
      {
        props.type === 'planets' &&
          <div className={`${props.type}-cards-container`}>
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
        props.type === 'vehicles' &&
          <div className={`${props.type}-cards-container`}>
            <p>Model: {props.cardData.model}</p>
            <p>Class: {props.cardData.class}</p>
            <p>Passengers: {props.cardData.passengers}</p>
          </div>
      }
    </div>  
  )
}

export default Card;