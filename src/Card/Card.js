import React from 'react';
import Button from '../Button/Button';
import './Card.css';

const Card = (props) => {
  const cardClass = !props.data.fav 
    ? 'Card'
    : 'Card favorite';

  let mappedResidents;
  if (props.type === 'planets') {
    mappedResidents = props.data.residents.map((resident, index) => {
      return (
        <li key={`li-${index}`}>{resident}</li>
      )
    })
  }

  return (
    <div className={cardClass}>
      <Button name='*'
              cardTitle={props.title}
              cardData ={props.data}
              cardType={props.type}
              cardFav={props.data.fav}
              updateFavorites={props.updateFavorites}/>
      <p>Name: {props.title}</p>
      {
        props.type === 'people' &&
          <div className={`${props.type}-cards-container`}>
            <p>Species: {props.data.species.name}</p>
            <p>Language: {props.data.species.language}</p>
            <p>Homeworld: {props.data.homeworld.name}</p>
            <p>Population: {props.data.homeworld.population}</p>
          </div>
      }
      {
        props.type === 'planets' &&
          <div className={`${props.type}-cards-container`}>
            <p>Terrain: {props.data.terrain}</p>
            <p>Climate: {props.data.climate}</p>
            <p>Population: {props.data.population}</p>
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
            <p>Model: {props.data.model}</p>
            <p>Class: {props.data.class}</p>
            <p>Passengers: {props.data.passengers}</p>
          </div>
      }
    </div>  
  )
}

export default Card;